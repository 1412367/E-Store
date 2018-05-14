var Navbar_tab = require('../models/navbar_tab');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/e-store');

Navbar_tab.on('index', err => {
    if (err) {
        console.error('Indexes could not be created:', err);
        return;
    }

    var navbar_tabs = [
        new Navbar_tab ({
            name: 'Trang chủ',
            link: 'index',
            order: 0
        }),
        new Navbar_tab ({
            name: 'Về chúng tôi',
            link: 'about',
            order: 1
        }),
        new Navbar_tab ({
            name: 'Mobile & Tablet',
            link: 'mobile&tablet',
            order: 2
        }),
        new Navbar_tab ({
            name: 'Laptop',
            link: 'laptop',
            order: 3
        }),
        new Navbar_tab ({
            name: 'Phụ kiện',
            link: 'accessories',
            order: 4
        }),
        new Navbar_tab ({
            name: 'Liên hệ',
            link: 'contact',
            order: 5
        })
    ]

    var done = 0;

    for (var i = 0; i < navbar_tabs.length; i++) {
        navbar_tabs[i].save(function (err, result) {
            
            if (err) {
                console.log(err);
            }

            done++;
            if (done === navbar_tabs.length) {
                mongoose.disconnect();
            }
        });
    }
});