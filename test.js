var Product = require('./models/product');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/e-store');



Product.find({})
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
    console.log(products.length);  
});
