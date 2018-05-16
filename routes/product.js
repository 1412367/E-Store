var express = require('express');
var router = express.Router();

var Product = require('../models/product');

router.get('/', function(req, res, next) {
    var id = req.query.id;
    console.log(id)
    Product.findOne({_id: id})
    .populate('product_type')
    .populate('manufacturer')
    .populate('specifications')
    .exec(function (err, product) {
        res.render('product', { title: 'Express', product: product});
    });
});



module.exports = router;