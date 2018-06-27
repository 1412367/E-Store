var express = require('express');
var router = express.Router();

var Product = require('../models/product');

router.get('/', function(req, res, next) {
    var manufacturer = req.query.manufacturer;
    var accessories_type = req.query.accessories_type;
    var find='';

    Manufacturer.findOne({_id: manufacturer})
    .exec(function (err, filter1) {
        if (filter1)
            find += filter1.name;
    });
    Accessories_type.findOne({_id: accessories_type})
    .exec(function (err, filter2) {
        if (filter2)
            find += filter2.name;
    });

    console.log('accessories_type: ' + accessories_type);
    console.log('manufacturer: ' + manufacturer);
    Product.find()
    .populate({
        path: 'product_type',
        match: {name: 'Phụ kiện'}
    })
    .populate({path: 'accessories_type', match: {_id: accessories_type} })
    .populate({path: 'manufacturer', match: {_id:manufacturer} })
    .populate('specifications')
    .exec(function (err, products) {
        products = products.filter(function(product) {
            // return only ative products in active accessories_types and active manufacturers
            return product.accessories_type && !product.deleted && !product.accessories_type.deleted && product.manufacturer && !product.manufacturer.deleted; 
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

            console.log("Accessories type list is loading....");
            Accessories_type.find({deleted : false})
            .sort('name')
            .exec(function(err, accessories_types) {
                if (err) {
                    console.error('Get accessories types error:', err);
                    return;
                }
                console.log("Accessories type list loaded !");
                res.render('accessories', { title: 'Express', products: products, manufacturers: manufacturers, accessories_types:accessories_types, filter:find });
            });
        });
    });
});



module.exports = router;
