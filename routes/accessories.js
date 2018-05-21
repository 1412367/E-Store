var express = require('express');
var router = express.Router();

var Product = require('../models/product');
var Product_Type = require('../models/product_type')

router.get('/', function(req, res, next) {
    var manufacturer = req.query.manufacturer;
    var accessories_type = req.query.accessories_type;
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
            // return only products with product_type, accessories_type and manufacturer != undefined
            return product.product_type && product.accessories_type && product.manufacturer && !product.deleted; 
        });
        res.render('accessories', { title: 'Express', products: products});
    });
});



module.exports = router;
