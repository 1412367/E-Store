var express = require('express');
var router = express.Router();

var Product = require('../models/product');

router.get('/', function(req, res, next) {
    var manufacturer = req.query.manufacturer;
    var find='';

    Manufacturer.findOne({_id: manufacturer})
    .exec(function (err, filter1) {
        if (filter1)
            find += filter1.name;
    });
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
            // return only products with product_type != undefined and not hidden
            result = product.product_type && !product.deleted;
            if (product.manufacturer) {
                result = result && !product.manufacturer.deleted;
            }
            return result;
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

            res.render('laptop', { title: 'Express', products: products, manufacturers:manufacturers, filter: find});
        });
    });
});



module.exports = router;
