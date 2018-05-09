var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema ({
    model: {type: String, unique: true, required: [true, 'Model Is Required !']},
    dimensions: {type: String},
    weight: {type: String},
    cpu: {type: String},
    gpu: {type: String},
    ram: {type: String},
    storage: {type: String},
    memory_cards: {type: String},
    display: {type: String},
    battery: {type: String},
    os: {type: String},
    front_camera: {type: String},
    back_camera: {type: String},
    sim: {type: String},
    wifi: {type: String},
    usb: {type: String},
    bluetooth: {type: String},
})

module.exports = mongoose.model('Specifications', schema);