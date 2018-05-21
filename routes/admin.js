var express = require('express');
var router = express.Router();

var Product = require('../models/product');

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

module.exports = router;
