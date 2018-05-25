var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema ({
    model: {type: String, unique: true, required: [true, 'Model Is Required !']},
    dimensions: {type: String},
    weight: {type: String},
    cpu: {type: String},
    gpu: {type: String},

    ram_type: {type: String},
    ram_size_GB: {type: Number},

    storage_type: {type: String},
    storage_size: {type: Number},
    storage_uom: {type: String},

    memory_cards: {type: String},

    scr_type: {type: String},
    scr_size_INCH: {type: Number},
    
    battery: {type: String},
    os: {type: String},
    front_camera: {type: String},
    back_camera: {type: String},
    sim: {type: String},
    wifi: {type: String},
    usb: {type: String},
    bluetooth: {type: String},
    created_date: {type: Date, default: Date.now},
    update_date: {type: Date, default: Date.now},
    deleted: {type: Boolean, default: false}
})

module.exports = mongoose.model('Specifications', schema);