var express = require('express');
var router = express.Router();

var Product = require('../models/product');

router.get('/', function(req, res, next) {
    Product.find()
    .populate({
        path: 'product_type',
        match: {name: { $in: [ 'Mobile',  'Tablet' ]}}
    })
    .populate('manufacturer')
    .populate('specifications')
    .exec(function (err, products) {
        products = products.filter(function(product) {
            return product.product_type; // return only products with product_type != null
        });
        res.render('mobile&tablet', { title: 'Express', products: products});
    });
});



module.exports = router;
