var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema ({
    name: {type: String, unique: true, required: [true, "Tab's Name Is Required !"]},
    link: {type: String, unique: true, required: [true, "Tab's Link Is Required !"]},
    order: {type: Number, default: 99},
    created_date: {type: Date, default: Date.now},
    update_date: {type: Date, default: Date.now},
    deleted: {type: Boolean, default: false}
})

module.exports = mongoose.model('Navbar_tab', schema);