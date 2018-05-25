var mongoose = require('mongoose');
var Schema = mongoose.Schema;

Product_type = require('./product_type');
Manufacturer = require('./manufacturer');
Specifications = require('./specifications');
Accessories_type  = require('./accessories_type');


var schema = new Schema ({
    product_type: {type: Schema.ObjectId, ref: 'Product_type', required: [true, 'Product_type Is Required !']},
    accessories_type: {type: Schema.ObjectId, ref: 'Accessories_type'},
    image_paths: {type: [String], required: [true, 'Image Path(s) Is Required !']},
    title: {type: String, required: [true, 'Title Is Required !']},
    manufacturer: {type: Schema.ObjectId, ref: 'Manufacturer'},
    colors: {type: [String], required: [true, 'Color(s) Is Required !']},
    description: {type: String, required: [true, 'Description Is Required !']},
    specifications: {type: Schema.ObjectId, ref: 'Specifications'},
    price: {type: Number, required: [true, 'Price Is Required !']},
    created_date: {type: Date, default: Date.now},
    update_date: {type: Date, default: Date.now},
    deleted: {type: Boolean, default: false}
})

module.exports = mongoose.model('Product', schema);