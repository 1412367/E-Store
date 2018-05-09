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
            product_type: 'Mobile'
        }),
        new Product_type ({
            product_type: 'Tablet'
        }),
        new Product_type ({
            product_type: 'Laptop'
        }),
        new Product_type ({
            product_type: 'Bàn phím'
        }),
        new Product_type ({
            product_type: 'Chuột'
        }),
        new Product_type ({
            product_type: 'Cáp sạc'
        }),
        new Product_type ({
            product_type: 'Cốc sạc'
        }),
        new Product_type ({
            product_type: 'Loa'
        }),
        new Product_type ({
            product_type: 'Ổ cứng di động'
        }),
        new Product_type ({
            product_type: 'Pin sạc dự phòng'
        }),
        new Product_type ({
            product_type: 'Tai nghe'
        }),
        new Product_type ({
            product_type: 'Thẻ nhớ'
        }),
        new Product_type ({
            product_type: 'Usb'
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