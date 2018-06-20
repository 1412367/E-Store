var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Product = require('../models/product');
var Product_type = require('../models/product_type');
var Accessories_type = require('../models/accessories_type');
var Specifications = require('../models/specifications');
var Manufacturer = require('../models/manufacturer');

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
        res.render('admin/product', { title: 'Express', products: products});
    });
});

router.get('/manufacturer', function(req, res, next) {
    Manufacturer.find()
    .exec(function (err, manufacturers) {
        res.render('admin/manufacturer', { title: 'Express', manufacturers: manufacturers});
    });
});

router.get('/specifications', function(req, res, next) {
    Specifications.find()
    .exec(function (err, specifications_list) {
        res.render('admin/specifications', { title: 'Express', specifications_list: specifications_list});
    });
});

router.get('/accessories_type', function(req, res, next) {
    Accessories_type.find()
    .exec(function (err, accessories_types) {
        res.render('admin/accessories_type', { title: 'Express', accessories_types: accessories_types});
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

router.post('/product/edit', function(req, res, next) {
    console.log(req.body);
    var obj = req.body;
    if (req.body.id != 'null')
        var id = mongoose.Types.ObjectId(obj.id);
    else
        var id = mongoose.Types.ObjectId();
    delete obj.id;
    obj.image_paths = ['/product_img/'+id+'_1.jpg', '/product_img/'+id+'_2.jpg'];
    Product_type.findOne({name: obj.product_type}, function(err, product_type) {
        obj.product_type = product_type._id;
        if (product_type.name != 'Phụ kiện') {
            obj.accessories_type = undefined;
        }
        if (obj.specifications == 'null') {
            obj.specifications = undefined;
        }
        obj.colors = req.body.colors.split(",");
        obj.update_date = Date(Date.now);
        setTimeout(function() {Product.update({_id: id}, obj, 
            {upsert: true, setDefaultsOnInsert: true}, 
            function (err, updatedProduct) {
                if (err) 
                    console.log(err);
                else
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
                console.log(err);
            else
                res.redirect('/admin/manufacturer');
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
                console.log(err);
            else
                res.redirect('/admin/accessories_type');
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


router.post('/delete', function(req, res, next) {
    var id = req.body.id;
    var item_type = req.body.item_type
    switch(item_type) {
        case "product":
            Product.findOne({_id: id}, function (err, product) {
                if (err)
                    console.log(err+" 1");
                else {
                    product.update_date = Date(Date.now);
                    product.deleted = true;
                    product.save(function (err, updatedProduct) {
                        if (err) 
                            console.log(err+" 2");
                        else
                            res.json("Ẩn thành công");
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
                    accessories_type.deleted = true;
                    accessories_type.save(function (err, updatedAccessories_type) {
                        if (err) 
                            console.log(err+" 2");
                        else
                            res.json("Ẩn thành công");
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
                    manufacturer.deleted = true;
                    manufacturer.save(function (err, updatedManufacturer) {
                        if (err) 
                            console.log(err+" 2");
                        else
                            res.json("Ẩn thành công");
                    });
                }
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
