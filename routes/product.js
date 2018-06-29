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
        else {
            console.log(product);
            Product.find({deleted: false, _id: {$ne: product._id}})
            .populate({
                path: 'product_type',
                match: {name: product.product_type.name}
            })
            .populate('manufacturer')
            .populate('accessories_type')
            .exec(function (err, list) {
                list = list.filter(function(item) {
                    // return only products with product_type != undefined and not hidden
                    result = item.product_type;
                    if (item.manufacturer) {
                        result = result && !item.manufacturer.deleted;
                    };
                    if (item.accessories_type) {
                        result = result && !item.accessories_type.deleted;
                    };
                    return result;
                });
                var relevant_list = [];
                relevant_list.push(list.slice(0, 12));
                relevant_list.forEach(function(item) {
                    console.log(item.title);
                    console.log(item.product_images);
                });
                res.render('product', { title: 'Express', product: product, relevant_list: list});
            })
        }
    });
});



module.exports = router;
