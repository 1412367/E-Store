var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema ({
    name: {type: String, unique: true, required: [true, "Product_type's Name Is Required !"]},
    created_date: {type: Date, default: Date.now},
    update_date: {type: Date, default: Date.now},
    deleted: {type: Boolean, default: false}
})

module.exports = mongoose.model('Product_type', schema);