var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema ({
    manufacturer: {type: String, unique: true, required: [true, 'Manufacturer Name Is Required !']}
})

module.exports = mongoose.model('Manufacturer', schema);