var Accessories_type = require('../models/accessories_type');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/e-store');

Accessories_type.on('index', err => {
    if (err) {
        console.error('Indexes could not be created:', err);
        return;
    }

    var accessories_type_list = [
        new Accessories_type ({
            name: 'Bàn phím'
        }),
        new Accessories_type ({
            name: 'Chuột'
        }),
        new Accessories_type ({
            name: 'Cáp sạc'
        }),
        new Accessories_type ({
            name: 'Cốc sạc'
        }),
        new Accessories_type ({
            name: 'Loa'
        }),
        new Accessories_type ({
            name: 'Ổ cứng di động'
        }),
        new Accessories_type ({
            name: 'Pin sạc dự phòng'
        }),
        new Accessories_type ({
            name: 'Tai nghe'
        }),
        new Accessories_type ({
            name: 'Thẻ nhớ'
        }),
        new Accessories_type ({
            name: 'Usb'
        })
    ]

    var done = 0;

    for (var i = 0; i < accessories_type_list.length; i++) {
        accessories_type_list[i].save(function (err, result) {
            
            if (err) {
                console.log(err);
            }

            done++;
            if (done === accessories_type_list.length) {
                mongoose.disconnect();
            }
        });
    }
});