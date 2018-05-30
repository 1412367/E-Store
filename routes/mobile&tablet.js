var express = require('express');
var router = express.Router();

var Product = require('../models/product');

router.get('/', function(req, res, next) {
    var manufacturer = req.query.manufacturer;
    console.log('manufacturer: ' + manufacturer);
    Product.find()
    .populate({
        path: 'product_type',
        match: {name: { $in: [ 'Mobile',  'Tablet' ]}}
    })
    .populate({path: 'manufacturer', match: {_id:manufacturer} })
    .populate('specifications')
    .exec(function (err, products) {
        products = products.filter(function(product) {
            // return only products with product_type and manufacturer != undefined
            return product.product_type && product.manufacturer && !product.deleted;
        });

        console.log("Manufacturer list is loading....");
        Manufacturer.find({deleted : false})
        .sort('name')
        .exec(function(err, manufacturers) {
            if (err) {
                console.error('Get manufacturers error:', err);
                return;
            }
            console.log("Manufacturer list loaded !");
            res.render('mobile&tablet', { title: 'Express', products: products, manufacturers:manufacturers});
        });
    });
});


module.exports = router;
