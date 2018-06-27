var express = require('express');
var router = express.Router();

var Product = require('../models/product');

router.get('/:id', function(req, res, next) {
    var id = req.params.id;
    console.log(id)
    Product.findOne({_id: id})
    .populate('product_type')
    .populate('manufacturer')
    .populate('specifications')
    .populate('accessories_type')
    .exec(function (err, product) {
        if (product.deleted || product.manufacturer && product.manufacturer.deleted || product.accessories_type && product.accessories_type.deleted) {
            res.redirect('/404');
        }
        res.render('product', { title: 'Express', product: product});
    });
});



module.exports = router;
