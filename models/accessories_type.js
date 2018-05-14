var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema ({
    name: {type: String, unique: true, required: [true, "Accessories_type's Name Is Required !"]}
})

module.exports = mongoose.model('Accessories_type', schema);