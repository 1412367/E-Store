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
            name: 'Apple'
        }),
        new Manufacturer ({
            name: 'Oppo'
        }),
        new Manufacturer ({
            name: 'Samsung'
        }),
        new Manufacturer ({
            name: 'HTC'
        }),
        new Manufacturer ({
            name: 'Asus'
        }),
        new Manufacturer ({
            name: 'Dell'
        }),
        new Manufacturer ({
            name: 'HP'
        }),
        new Manufacturer ({
            name: 'Nokia'
        }),
        new Manufacturer ({
            name: 'Google'
        }),
        new Manufacturer ({
            name: 'Lenovo'
        }),
        new Manufacturer ({
            name: 'Windows'
        }),
        new Manufacturer ({
            name: 'SanDisk'
        }),
        new Manufacturer ({
            name: 'Kingston'
        }),
        new Manufacturer ({
            name: 'Seagate'
        }),
        new Manufacturer ({
            name: 'Xiaomi'
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