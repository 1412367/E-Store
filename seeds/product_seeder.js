var Product = require('../models/product');
var Product_Type = require('../models/product_type');
var Accessories_type  = require('../models/accessories_type');
var Manufacturer = require('../models/manufacturer');
var Specifications = require('../models/specifications');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/e-store');

Product.on('index', err => {
    if (err) {
        console.error('Indexes could not be created:', err);
        return;
    }
    var done = 0;

    var loop1 = function(i) {
        Product_Type.findOne({'name': 'Laptop'}, function (err, product_type) {
            Manufacturer.findOne({'name': 'Dell'}, function (err, manufacturer) {
                Specifications.findOne({'model': "Laptop test No."+ i +"'s model"}, function (err, specifications) {
                    var product = new Product ({
                        product_type: product_type._id,
                        image_paths: ['/product_img/'+specifications.model+'_1.jpg', '/product_img/'+specifications.model+'_2.jpg'],
                        title: 'Laptop test No.' + i,
                        manufacturer: manufacturer._id,
                        colors: ['Black', 'White'],
                        description: 'Some long long long long long long description of Laptop test No.'+i,
                        specifications: specifications._id,
                        price: 1000+i
                    });
                    console.log(++done + ' done !');
                    product.save(function (err, result) {
                        if (err) {
                            console.log(err);
                        }
                        if (done === 60) {
                            mongoose.disconnect();
                        }
                        if ( ++i < 15 ) {
                            loop1(i);
                        }
                    });
                })
            })
        });
    };

    var loop2 = function(i) {
        Product_Type.findOne({'name': 'Mobile'}, function (err, product_type) {
            Manufacturer.findOne({'name': 'Lenovo'}, function (err, manufacturer) {
                Specifications.findOne({'model': "Phone test No."+ i +"'s model"}, function (err, specifications) {
                    var product = new Product ({
                        product_type: product_type._id,
                        image_paths: ['/product_img/'+specifications.model+'_1.jpg', '/product_img/'+specifications.model+'_2.jpg'],
                        title: 'Phone test No.' + i,
                        manufacturer: manufacturer._id,
                        colors: ['Black', 'White', 'Rose gold'],
                        description: 'Some long long long long long long description of Phone test No.'+i,
                        specifications: specifications._id,
                        price: 100+i
                    });
                    console.log(++done + ' done !');
                    product.save(function (err, result) {
                        if (err) {
                            console.log(err);
                        }
                        if (done === 60) {
                            mongoose.disconnect();
                        }
                        if ( ++i < 15 ) {
                            loop2(i);
                        }
                    });
                })
            })
        });
    };

    var loop3 = function(i) {
        Product_Type.findOne({'name': 'Mobile'}, function (err, product_type) {
            Manufacturer.findOne({'name': 'Apple'}, function (err, manufacturer) {
                Specifications.findOne({'model': "Tablet test No."+ i +"'s model"}, function (err, specifications) {
                    var product = new Product ({
                        product_type: product_type._id,
                        image_paths: ['/product_img/'+specifications.model+'_1.jpg', '/product_img/'+specifications.model+'_2.jpg'],
                        title: 'Tablet test No.' + i,
                        manufacturer: manufacturer._id,
                        colors: ['Black', 'White', 'Rose gold'],
                        description: 'Some long long long long long long description of Tablet test No.'+i,
                        specifications: specifications._id,
                        price: 500+i
                    });
                    console.log(++done + ' done !');
                    product.save(function (err, result) {
                        if (err) {
                            console.log(err);
                        }
                        if (done === 60) {
                            mongoose.disconnect();
                        }
                        if ( ++i < 15 ) {
                            loop3(i);
                        }
                    });
                })
            })
        });
    };

    var loop4 = function(i) {
        Product_Type.findOne({'name': 'Phụ kiện'}, function (err, product_type) {
            Accessories_type.findOne({'name': 'Bàn phím'}, function (err, accessories_type) {
                Manufacturer.findOne({'name': 'Xiaomi'}, function (err, manufacturer) {
                    Specifications.findOne({'model': "Accessory (keyboard) test No."+ i +"'s model"}, function (err, specifications) {
                        var product = new Product ({
                            product_type: product_type._id,
                            accessories_type: accessories_type._id,
                            image_paths: ['/product_img/'+specifications.model+'_1.jpg', '/product_img/'+specifications.model+'_2.jpg'],
                            title: 'Accessory test No.' + i,
                            manufacturer: manufacturer._id,
                            colors: ['Black', 'White', 'Rose gold'],
                            description: 'Some long long long long long long description of Accessory test No.'+i,
                            specifications: specifications._id,
                            price: 100+i
                        });
                        console.log(++done + ' done !');
                        product.save(function (err, result) {
                            if (err) {
                                console.log(err);
                            }
                            if (done === 60) {
                                mongoose.disconnect();
                            }
                            if ( ++i < 15 ) {
                                loop4(i);
                            }
                        });
                    })
                })
            })
        });
    };

    loop1(0);
    loop2(0);
    loop3(0);
    loop4(0);
});

