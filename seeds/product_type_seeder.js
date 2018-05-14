var Product_type = require('../models/product_type');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/e-store');

Product_type.on('index', err => {
    if (err) {
        console.error('Indexes could not be created:', err);
        return;
    }

    var product_types = [
        new Product_type ({
            name: 'Mobile'
        }),
        new Product_type ({
            name: 'Tablet'
        }),
        new Product_type ({
            name: 'Laptop'
        }),
        new Product_type ({
            name: 'Phụ kiện'
        })
    ]

    var done = 0;

    for (var i = 0; i < product_types.length; i++) {
        product_types[i].save(function (err, result) {
            
            if (err) {
                console.log(err);
            }

            done++;
            if (done === product_types.length) {
                mongoose.disconnect();
            }
        });
    }
});