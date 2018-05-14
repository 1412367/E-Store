var express = require('express');
var router = express.Router();

var Product = require('../models/product');
var Product_Type = require('../models/product_type')

router.get('/', function(req, res, next) {
    Product_Type.find({product_type: { $in: [ 'Laptop' ]}}, '_id', function (err, ids) {
        Product.find({product_type_id: { $in: ids}}, function (err, docs) {
            res.render('laptop', { title: 'Express', navActive: 'laptop', products: docs});
        });
    });
});



module.exports = router;
