var mongoose = require('mongoose');
var Schema = mongoose.Schema;

Product_type = require('./product_type');
Manufacturer = require('./manufacturer');
Specifications = require('./specifications');


var schema = new Schema ({
    product_type: {type: Schema.ObjectId, ref: 'Product_type', required: [true, 'Product_type Is Required !']},
    image_paths: {type: [String], required: [true, 'Image Path Is Required !']},
    title: {type: String, required: [true, 'Title Is Required !']},
    manufacturer: {type: Schema.ObjectId, ref: 'Manufacturer'},
    description: {type: String, required: [true, 'Description Is Required !']},
    specifications: {type: Schema.ObjectId, ref: 'Specifications'},
    price: {type: Number, required: [true, 'Price Is Required !']},
})

module.exports = mongoose.model('Product', schema);