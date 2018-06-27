var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var multer = require('multer');
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, '/public/product_img/');
    },
    filename: function(req, file, cb) {
        cb(null, new Date().toISOString().replace(/:/g, '-') + file.mimetype);
    }
});
var fileFilter = function(req, file, cb) {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    }
    else {
        cb(null, false);
    }
}
var upload = multer({storage: storage, fileFilter: fileFilter});

var Product = require('../models/product');

//- Chặn user chưa đăng nhập dùng các router bên dưới
router.use('/', isLoggedIn, function(req, res, next) {
    next();
});

router.get('/', function(req, res, next) {
    res.redirect('/admin/product');
});

router.get('/product', function(req, res, next) {
    Product.find()
    .populate('product_type')
    .populate('accessories_type')
    .populate('manufacturer')
    .populate('specifications')
    .exec(function (err, products) {
        res.render('admin/product', { title: 'Express', products: products, errors: req.flash('error'), successes: req.flash('success')});
    });
});

router.get('/manufacturer', function(req, res, next) {
    Manufacturer.find()
    .exec(function (err, manufacturers) {
        res.render('admin/manufacturer', { title: 'Express', manufacturers: manufacturers, errors: req.flash('error'), successes: req.flash('success')});
    });
});

router.get('/specifications', function(req, res, next) {
    Specifications.find()
    .exec(function (err, specifications_list) {
        res.render('admin/specifications', { title: 'Express', specifications_list: specifications_list, errors: req.flash('error'), successes: req.flash('success')});
    });
});

router.get('/accessories_type', function(req, res, next) {
    Accessories_type.find()
    .exec(function (err, accessories_types) {
        res.render('admin/accessories_type', { title: 'Express', accessories_types: accessories_types, errors: req.flash('error'), successes: req.flash('success')});
    });
});

router.post('/product', function(req, res, next) {
    var id = req.body.id;
    Product.findOne({_id: id})
    .populate('product_type')
    .populate('accessories_type')
    .populate('manufacturer')
    .populate('specifications')
    .exec(function (err, products) {
        res.json(products);
    });
});

router.post('/product/edit', upload.single('image_paths'), function(req, res, next) {
    console.log(req.file);
    console.log(req.body);
    var obj = req.body;
    if (req.body.id != 'null') {
        console.log('Cap nhat');
        var id = mongoose.Types.ObjectId(obj.id);
        if (req.file) {
            console.log('Co file');
            Product.findOne({_id:id}, function(product) {
                product.image_paths.push(req.file.path);
                product.save(function (err) {
                    if (err) return handleError(err);
                });
            })
        }
        else
            delete obj.image_paths;
    }   
    else {
        console.log('Them moi');
        var id = mongoose.Types.ObjectId();
        if (req.file)
            obj.image_paths = req.file.path;
        else
            delete obj.image_paths;
    }
    delete obj.id;
    Product_type.findOne({name: obj.product_type}, function(err, product_type) {
        obj.product_type = product_type._id;
        
        if (product_type.name != 'Phụ kiện')
            obj.accessories_type = undefined;
        if (obj.manufacturer == 'null') 
            obj.manufacturer = undefined;
        if (obj.specifications == 'null') 
            obj.specifications = undefined;

        obj.colors = req.body.colors.split(",");
        obj.update_date = Date(Date.now);

        console.log(obj);
        setTimeout(function() {Product.update({_id: id}, obj, 
            {upsert: true, setDefaultsOnInsert: true}, 
            function (err, updatedProduct) {
                if (err) 
                    req.flash('error', err);
                else
                    req.flash('success', 'Lưu lại thành công.');

                res.redirect('/admin/product');
            })},500)
    });
});

router.post('/manufacturer', function(req, res, next) {
    if (req.body.id) {
        Manufacturer.findOne({_id:req.body.id})
        .exec(function (err, manufacturer) {
            res.json(manufacturer);
        });
    }
    else {
        Manufacturer.find()
        .sort('name')
        .exec(function (err, manufacturers) {
            res.json(manufacturers);
        });
    }
});

router.post('/manufacturer/edit', function(req, res, next) {
    var obj = req.body;
    if (req.body.id != 'null')
        var id = mongoose.Types.ObjectId(obj.id);
    else
        var id = mongoose.Types.ObjectId();
    delete obj.id;
    obj.update_date = Date(Date.now);
    setTimeout(function() { Manufacturer.update({_id: id}, obj, 
        {upsert: true, setDefaultsOnInsert: true}, 
        function (err, updated_manufacturer) {
            if (err) 
                req.flash('error', err);
            else
                req.flash('success', 'Lưu lại thành công.');
            res.redirect('/admin/manufacturer');
        }
    )},500);
});

router.post('/specifications', function(req, res, next) {
    if (req.body.id) {
        Specifications.findOne({_id:req.body.id})
        .exec(function (err, specifications) {
            res.json(specifications);
        });
    }
    else {
        Specifications.find()
        .sort('model')
        .exec(function (err, specifications_list) {
            res.json(specifications_list);
        });
    }
});

router.post('/specifications/edit', function(req, res, next) {
    var obj = req.body;
    if (req.body.id != 'null')
        var id = mongoose.Types.ObjectId(obj.id);
    else
        var id = mongoose.Types.ObjectId();
    delete obj.id;
    obj.update_date = Date(Date.now);
    setTimeout(function() { Specifications.update({_id: id}, obj, 
        {upsert: true, setDefaultsOnInsert: true}, 
        function (err, updated_accessories_type) {
            if (err) 
                req.flash('error', err);
            else
                req.flash('success', 'Lưu lại thành công.');
            res.redirect('/admin/specifications');
        }
    )},500);
});

router.post('/accessories_type', function(req, res, next) {
    if (req.body.id) {
        Accessories_type.findOne({_id:req.body.id})
        .exec(function (err, accessories_type) {
            res.json(accessories_type);
        });
    }
    else {
        Accessories_type.find()
        .sort('name')
        .exec(function (err, accessories_types) {
            res.json(accessories_types);
        });
    }
});

router.post('/accessories_type/edit', function(req, res, next) {
    var obj = req.body;
    if (req.body.id != 'null')
        var id = mongoose.Types.ObjectId(obj.id);
    else
        var id = mongoose.Types.ObjectId();
    delete obj.id;
    obj.update_date = Date(Date.now);
    setTimeout(function() { Accessories_type.update({_id: id}, obj, 
        {upsert: true, setDefaultsOnInsert: true}, 
        function (err, updated_accessories_type) {
            if (err) 
                req.flash('error', err);
            else
                req.flash('success', 'Lưu lại thành công.');
            res.redirect('/admin/accessories_type');
        }
    )},500);
});



router.post('/delete', function(req, res, next) {
    var id = req.body.id;
    var item_type = req.body.item_type
    switch(item_type) {
        case "product":
            Product.findOne({_id: id}, function (err, product) {
                if (err)
                    console.log(err+" - find error");
                else {
                    product.update_date = Date(Date.now);
                    product.deleted = true;
                    product.save(function (err, updatedProduct) {
                        if (err) 
                            console.log(err+" - save error");
                        else
                            res.json("Ẩn thành công");
                    });
                }
            });
            break;
        case "accessories_type":
            Accessories_type.findOne({_id: id}, function (err, accessories_type) {
                if (err)
                    console.log(err+" - find error");
                else {
                    accessories_type.update_date = Date(Date.now);
                    accessories_type.deleted = true;
                    accessories_type.save(function (err, updatedAccessories_type) {
                        if (err) 
                            console.log(err+" - save error");
                        else
                            res.json("Ẩn thành công");
                    });
                }
            });
            break;
        case "manufacturer":
            Manufacturer.findOne({_id: id}, function (err, manufacturer) {
                if (err)
                    console.log(err+" - find error");
                else {
                    manufacturer.update_date = Date(Date.now);
                    manufacturer.deleted = true;
                    manufacturer.save(function (err, updatedManufacturer) {
                        if (err) 
                            console.log(err+" - save error");
                        else
                            res.json("Ẩn thành công");
                    });
                }
            });
            break;
        case "specifications":
            Specifications.findOneAndRemove({ _id: id }) 
            .exec(function(err, item) {
                if (err) {
                    return res.json('Cannot remove specifications');
                }       
                if (!item) {
                    return res.json('Specifications not found');
                }  
                res.json('Xóa thành công');
            });
            break;
        default:
            res.send("404 - Item type not found");
    };
});

router.post('/restore', function(req, res, next) {
    var id = req.body.id;
    var item_type = req.body.item_type
    switch(item_type) {
        case "product":
            Product.findOne({_id: id}, function (err, product) {
                if (err)
                    console.log(err+" 1");
                else {
                    product.update_date = Date(Date.now);
                    product.deleted = false;
                    product.save(function (err, updatedProduct) {
                        if (err) 
                            console.log(err+" 2");
                        else
                            res.json("Khôi phục thành công");
                    });
                }
            });
            break;
        case "accessories_type":
            Accessories_type.findOne({_id: id}, function (err, accessories_type) {
                if (err)
                    console.log(err+" 1");
                else {
                    accessories_type.update_date = Date(Date.now);
                    accessories_type.deleted = false;
                    accessories_type.save(function (err, updatedAccessories_type) {
                        if (err) 
                            console.log(err+" 2");
                        else
                            res.json("Hiện thành công");
                    });
                }
            });
            break;
        case "manufacturer":
            Manufacturer.findOne({_id: id}, function (err, manufacturer) {
                if (err)
                    console.log(err+" 1");
                else {
                    manufacturer.update_date = Date(Date.now);
                    manufacturer.deleted = false;
                    manufacturer.save(function (err, updatedManufacturer) {
                        if (err) 
                            console.log(err+" 2");
                        else
                            res.json("Hiện thành công");
                    });
                }
            });
            break;
        default:
            res.send("404 - Item type not found");
    };
});

module.exports = router;

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect('/');
};