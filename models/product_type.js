var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema ({
    product_type: {type: String, unique: true, required: [true, 'Product Type Is Required !']}
})

module.exports = mongoose.model('Product_type', schema);