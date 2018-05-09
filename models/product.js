var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Product_Type = require('./product_type')
var Manufacturer = require('./Manufacturer')
var Specifications = require('./specifications')

var schema = new Schema ({
    product_type_id: {type: Schema.ObjectId, ref: 'Product_Type', required: [true, 'Product_type_id Is Required !']},
    imagePaths: {type: [String], required: [true, 'Image Path Is Required !']},
    title: {type: String, required: [true, 'Title Is Required !']},
    Manufacturer_id: {type: Schema.ObjectId, ref: 'Manufacturer'},
    description: {type: String, required: [true, 'Description Is Required !']},
    specifications_id: {type: Schema.ObjectId, ref: 'Specifications'},
    price: {type: Number, required: [true, 'Price Is Required !']},
})

module.exports = mongoose.model('Product', schema);