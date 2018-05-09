var Product = require('../models/product');
var Product_Type = require('../models/product_type')
var Manufacturer = require('../models/Manufacturer')
var Specifications = require('../models/specifications')

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/e-store');

Product.on('index', err => {
    if (err) {
        console.error('Indexes could not be created:', err);
        return;
    }

    Product_Type.findOne({'product_type': 'Mobile'}, '_id', function (err, product_type_id) {
        Manufacturer.findOne({'manufacturer': 'Lenovo'}, '_id', function (err, manufacturer_id) {
            Specifications.findOne({'model': '1 Lenovo Vibe K4 Note A7010'}, '_id', function (err, specifications_id) {
                var temp = new Product ({
                    product_type_id: product_type_id,
                    imagePaths: ['product_img/1.jpg', 'product_img/1.1.jpg'],
                    title: 'test 1',
                    manufacturer_id: manufacturer_id,
                    description: 'hi',
                    specifications_id: specifications_id,
                    price: 10
                });
                temp.save(function (err, result) {
                    if (err) {
                        console.log(err);
                    }
                });
            })
        })
    });
    Product_Type.findOne({'product_type': 'Mobile'}, '_id', function (err, product_type_id) {
        Manufacturer.findOne({'manufacturer': 'Lenovo'}, '_id', function (err, manufacturer_id) {
            Specifications.findOne({'model': '2 Lenovo Vibe K4 Note A7010'}, '_id', function (err, specifications_id) {
                var temp = new Product ({
                    product_type_id: product_type_id,
                    imagePaths: ['product_img/2.jpg', 'product_img/2.2.jpg'],
                    title: 'test 2',
                    manufacturer_id: manufacturer_id,
                    description: 'hi',
                    specifications_id: specifications_id,
                    price: 10
                });
                temp.save(function (err, result) {
                    if (err) {
                        console.log(err);
                    }
                });
            })
        })
    });
    Product_Type.findOne({'product_type': 'Mobile'}, '_id', function (err, product_type_id) {
        Manufacturer.findOne({'manufacturer': 'Lenovo'}, '_id', function (err, manufacturer_id) {
            Specifications.findOne({'model': '3 Lenovo Vibe K4 Note A7010'}, '_id', function (err, specifications_id) {
                var temp = new Product ({
                    product_type_id: product_type_id,
                    imagePaths: ['product_img/3.jpg', 'product_img/3.3.jpg'],
                    title: 'test 3',
                    manufacturer_id: manufacturer_id,
                    description: 'hi',
                    specifications_id: specifications_id,
                    price: 10
                });
                temp.save(function (err, result) {
                    if (err) {
                        console.log(err);
                    }
                });
            })
        })
    });
    Product_Type.findOne({'product_type': 'Mobile'}, '_id', function (err, product_type_id) {
        Manufacturer.findOne({'manufacturer': 'Lenovo'}, '_id', function (err, manufacturer_id) {
            Specifications.findOne({'model': '4 Lenovo Vibe K4 Note A7010'}, '_id', function (err, specifications_id) {
                var temp = new Product ({
                    product_type_id: product_type_id,
                    imagePaths: ['product_img/4.jpg', 'product_img/4.4.jpg'],
                    title: 'test 4',
                    manufacturer_id: manufacturer_id,
                    description: 'hi',
                    specifications_id: specifications_id,
                    price: 10
                });
                temp.save(function (err, result) {
                    if (err) {
                        console.log(err);
                    }
                });
            })
        })
    });
    Product_Type.findOne({'product_type': 'Mobile'}, '_id', function (err, product_type_id) {
        Manufacturer.findOne({'manufacturer': 'Lenovo'}, '_id', function (err, manufacturer_id) {
            Specifications.findOne({'model': '5 Lenovo Vibe K4 Note A7010'}, '_id', function (err, specifications_id) {
                var temp = new Product ({
                    product_type_id: product_type_id,
                    imagePaths: ['product_img/5.jpg', 'product_img/5.5.jpg'],
                    title: 'test 5',
                    manufacturer_id: manufacturer_id,
                    description: 'hi',
                    specifications_id: specifications_id,
                    price: 10
                });
                temp.save(function (err, result) {
                    if (err) {
                        console.log(err);
                    }
                });
            })
        })
    });
    Product_Type.findOne({'product_type': 'Mobile'}, '_id', function (err, product_type_id) {
        Manufacturer.findOne({'manufacturer': 'Lenovo'}, '_id', function (err, manufacturer_id) {
            Specifications.findOne({'model': '6 Lenovo Vibe K4 Note A7010'}, '_id', function (err, specifications_id) {
                var temp = new Product ({
                    product_type_id: product_type_id,
                    imagePaths: ['product_img/6.jpg', 'product_img/6.6.jpg'],
                    title: 'test 6',
                    manufacturer_id: manufacturer_id,
                    description: 'hi',
                    specifications_id: specifications_id,
                    price: 10
                });
                temp.save(function (err, result) {
                    if (err) {
                        console.log(err);
                    }
                });
            })
        })
    });
    Product_Type.findOne({'product_type': 'Mobile'}, '_id', function (err, product_type_id) {
        Manufacturer.findOne({'manufacturer': 'Lenovo'}, '_id', function (err, manufacturer_id) {
            Specifications.findOne({'model': '7 Lenovo Vibe K4 Note A7010'}, '_id', function (err, specifications_id) {
                var temp = new Product ({
                    product_type_id: product_type_id,
                    imagePaths: ['product_img/7.jpg', 'product_img/7.7.jpg'],
                    title: 'test 7',
                    manufacturer_id: manufacturer_id,
                    description: 'hi',
                    specifications_id: specifications_id,
                    price: 10
                });
                temp.save(function (err, result) {
                    if (err) {
                        console.log(err);
                    }
                });
            })
        })
    });
    Product_Type.findOne({'product_type': 'Mobile'}, '_id', function (err, product_type_id) {
        Manufacturer.findOne({'manufacturer': 'Lenovo'}, '_id', function (err, manufacturer_id) {
            Specifications.findOne({'model': '8 Lenovo Vibe K4 Note A7010'}, '_id', function (err, specifications_id) {
                var temp = new Product ({
                    product_type_id: product_type_id,
                    imagePaths: ['product_img/8.jpg', 'product_img/8.8.jpg'],
                    title: 'test 8',
                    manufacturer_id: manufacturer_id,
                    description: 'hi',
                    specifications_id: specifications_id,
                    price: 10
                });
                temp.save(function (err, result) {
                    if (err) {
                        console.log(err);
                    }
                });
            })
        })
    });
    Product_Type.findOne({'product_type': 'Mobile'}, '_id', function (err, product_type_id) {
        Manufacturer.findOne({'manufacturer': 'Lenovo'}, '_id', function (err, manufacturer_id) {
            Specifications.findOne({'model': '9 Lenovo Vibe K4 Note A7010'}, '_id', function (err, specifications_id) {
                var temp = new Product ({
                    product_type_id: product_type_id,
                    imagePaths: ['product_img/9.jpg', 'product_img/9.9.jpg'],
                    title: 'test 9',
                    manufacturer_id: manufacturer_id,
                    description: 'hi',
                    specifications_id: specifications_id,
                    price: 10
                });
                temp.save(function (err, result) {
                    if (err) {
                        console.log(err);
                    }
                });
            })
        })
    });
    Product_Type.findOne({'product_type': 'Mobile'}, '_id', function (err, product_type_id) {
        Manufacturer.findOne({'manufacturer': 'Lenovo'}, '_id', function (err, manufacturer_id) {
            Specifications.findOne({'model': '10 Lenovo Vibe K4 Note A7010'}, '_id', function (err, specifications_id) {
                var temp = new Product ({
                    product_type_id: product_type_id,
                    imagePaths: ['product_img/10.jpg', 'product_img/10.10.jpg'],
                    title: 'test 10',
                    manufacturer_id: manufacturer_id,
                    description: 'hi',
                    specifications_id: specifications_id,
                    price: 10
                });
                temp.save(function (err, result) {
                    if (err) {
                        console.log(err);
                    }
                });
            })
        })
    });
    Product_Type.findOne({'product_type': 'Mobile'}, '_id', function (err, product_type_id) {
        Manufacturer.findOne({'manufacturer': 'Lenovo'}, '_id', function (err, manufacturer_id) {
            Specifications.findOne({'model': '11 Lenovo Vibe K4 Note A7010'}, '_id', function (err, specifications_id) {
                var temp = new Product ({
                    product_type_id: product_type_id,
                    imagePaths: ['product_img/11.jpg', 'product_img/11.11.jpg'],
                    title: 'test 11',
                    manufacturer_id: manufacturer_id,
                    description: 'hi',
                    specifications_id: specifications_id,
                    price: 10
                });
                temp.save(function (err, result) {
                    if (err) {
                        console.log(err);
                    }
                });
            })
        })
    });
    Product_Type.findOne({'product_type': 'Mobile'}, '_id', function (err, product_type_id) {
        Manufacturer.findOne({'manufacturer': 'Lenovo'}, '_id', function (err, manufacturer_id) {
            Specifications.findOne({'model': '12 Lenovo Vibe K4 Note A7010'}, '_id', function (err, specifications_id) {
                var temp = new Product ({
                    product_type_id: product_type_id,
                    imagePaths: ['product_img/12.jpg', 'product_img/12.12.jpg'],
                    title: 'test 12',
                    manufacturer_id: manufacturer_id,
                    description: 'hi',
                    specifications_id: specifications_id,
                    price: 10
                });
                temp.save(function (err, result) {
                    if (err) {
                        console.log(err);
                    }
                });
            })
        })
    });
});

