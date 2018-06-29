var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var schema = new Schema ({
    name: {type: String, requỉed: true},
    email: {type: String, requỉed: true},
    password: {type: String, requỉed: true},
    role: {type: String, requỉed: true, default: 'customer'},
    avatar: {type: String},
    created_date: {type: Date, default: Date.now},
    update_date: {type: Date, default: Date.now},
    blocked: {type: Boolean, default: false},
});

schema.methods.encryptPassword = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);
};

schema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model("User", schema);