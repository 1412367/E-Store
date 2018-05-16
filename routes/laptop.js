var express = require('express');
var router = express.Router();

var Product = require('../models/product');
var Product_Type = require('../models/product_type')

router.get('/', function(req, res, next) {
    var manufacturer = req.query.manufacturer;
    console.log('manufacturer: ' + manufacturer);
    Product.find()
    .populate({
        path: 'product_type',
        match: {name: 'Laptop'}
    })
    .populate({path: 'manufacturer', match: {_id:manufacturer} })
    .populate('specifications')
    .exec(function (err, products) {
        products = products.filter(function(product) {
            // return only products with product_type and manufacturer != undefined
            return product.product_type && product.manufacturer; 
        });
        res.render('laptop', { title: 'Express', products: products});
    });
});



module.exports = router;
