var Manufacturer = require('../models/manufacturer');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/e-store');

Manufacturer.on('index', err => {
    if (err) {
        console.error('Indexes could not be created:', err);
        return;
    }

    var manufacturers = [
        new Manufacturer ({
            manufacturer: 'Apple'
        }),
        new Manufacturer ({
            manufacturer: 'Oppo'
        }),
        new Manufacturer ({
            manufacturer: 'Samsung'
        }),
        new Manufacturer ({
            manufacturer: 'HTC'
        }),
        new Manufacturer ({
            manufacturer: 'Asus'
        }),
        new Manufacturer ({
            manufacturer: 'Dell'
        }),
        new Manufacturer ({
            manufacturer: 'HP'
        }),
        new Manufacturer ({
            manufacturer: 'Nokia'
        }),
        new Manufacturer ({
            manufacturer: 'Google'
        }),
        new Manufacturer ({
            manufacturer: 'Lenovo'
        }),
        new Manufacturer ({
            manufacturer: 'Windows'
        }),
        new Manufacturer ({
            manufacturer: 'SanDisk'
        }),
        new Manufacturer ({
            manufacturer: 'Kingston'
        }),
        new Manufacturer ({
            manufacturer: 'Seagate'
        }),
        new Manufacturer ({
            manufacturer: 'Xiaomi'
        })
    ]

    var done = 0;

    for (var i = 0; i < manufacturers.length; i++) {
        manufacturers[i].save(function (err, result) {
            
            if (err) {
                console.log(err);
            }

            done++;
            if (done === manufacturers.length) {
                mongoose.disconnect();
            }
        });
    }
});