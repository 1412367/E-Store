var Specifications = require('../models/specifications');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/e-store');
var done = 0;

Specifications.on('index', err => {
    if (err) {
        console.error('Indexes could not be created:', err);
        return;
    }
    
    var loop1 = function(i) {
        var specifications = new Specifications ({
            model: "Laptop test No."+ i +"'s model",
            dimensions: '',
            weight: '1.15 Kg',
            cpu: 'Intel® 4th Generation Core™ i5-4200U Processor (3M Cache, up to 2.60 GHz)',
            gpu: 'Intel® HD Graphics 4400, NVIDIA GeForce GT 740M 2 GB',
            ram_type: 'Up to 8GB supported, DDR3 1600 Mhz',
            ram_size_GB: 4,
            storage_type: 'SATA HDD, 5400 RPM',
            storage_size: 500,
            storage_uom: 'GB',
            memory_cards: '',
            scr_type: 'HD LED Anti-glare Display, 1366 x 768 pixels',
            scr_size_INCH: 14,
            battery: '3-cell Lithium Ion',
            os: 'Ubuntu', 
            front_camera: '1.0 MP, 720p HD',
            back_camera: '',
            sim: '',
            wifi: '	802.11 b/g/n',
            usb: '',
            bluetooth: '4.0',
        });
        console.log(++done + ' done !');
        specifications.save(function (err, result) {
            if (err) {
                console.log(err);
            }
            if (done === 60) {
                mongoose.disconnect();
            }
            if ( ++i < 15 ) {
                loop1(i);
            }
        });
    };

    var loop2 = function(i) {
        var specifications = new Specifications ({
            model: "Phone test No."+ i +"'s model",
            dimensions: '153.6 x 76.5 x 9.2 mm (6.05 x 3.01 x 0.36 inches)',
            weight: '158 g (5.57 oz)',
            cpu: 'Octa-core 1.3 GHz Cortex-A53',
            gpu: 'Mali-T720MP3',
            ram_size_GB: 2,
            storage_size: 32,
            storage_uom: 'GB',
            memory_cards: 'microSD, up to 256 GB (dedicated slot)',
            scr_type: 'IPS LCD capacitive touchscreen, 16M colors, 1080 x 1920 pixels, 16:9 ratio',
            scr_size_INCH: 5.5,
            battery: 'Non-removable Li-Po 3300 mAh battery',
            os: 'Android 5.1.1 (Lollipop), upgradable to 6.0 (Marshmallow)',
            front_camera: '5 MP, f/2.2',
            back_camera: '13 MP, f/2.2, phase detection autofocus, dual-LED dual-tone flash',
            sim: 'Dual SIM (Micro-SIM, dual stand-by)',
            wifi: 'Wi-Fi 802.11 a/b/g/n/ac, Wi-Fi Direct, hotspot',
            usb: 'microUSB 2.0',
            bluetooth: '4.0, A2DP, LE',
        });
        console.log(++done + ' done !');
        specifications.save(function (err, result) {
            if (err) {
                console.log(err);
            }
            if (done === 60) {
                mongoose.disconnect();
            }
            if ( ++i < 15 ) {
                loop2(i);
            }
        });
    }

    var loop3 = function(i) {
        var specifications = new Specifications ({
            model: "Tablet test No."+ i +"'s model",
            dimensions: '153.6 x 76.5 x 9.2 mm (6.05 x 3.01 x 0.36 inches)',
            weight: '158 g (5.57 oz)',
            cpu: 'Octa-core 1.3 GHz Cortex-A53',
            gpu: 'Mali-T720MP3',
            ram_size_GB: 2,
            storage_size: 32,
            storage_uom: 'GB',
            memory_cards: 'microSD, up to 256 GB (dedicated slot)',
            scr_type: 'IPS LCD capacitive touchscreen, 16M colors, 1080 x 1920 pixels, 16:9 ratio',
            scr_size_INCH: 5.5,
            battery: 'Non-removable Li-Po 3300 mAh battery',
            os: 'Android 5.1.1 (Lollipop), upgradable to 6.0 (Marshmallow)',
            front_camera: '5 MP, f/2.2',
            back_camera: '13 MP, f/2.2, phase detection autofocus, dual-LED dual-tone flash',
            sim: 'Dual SIM (Micro-SIM, dual stand-by)',
            wifi: 'Wi-Fi 802.11 a/b/g/n/ac, Wi-Fi Direct, hotspot',
            usb: 'microUSB 2.0',
            bluetooth: '4.0, A2DP, LE',
        });
        console.log(++done + ' done !');
        specifications.save(function (err, result) {
            if (err) {
                console.log(err);
            }
            if (done === 60) {
                mongoose.disconnect();
            }
            if ( ++i < 15 ) {
                loop3(i);
            }
        });
    }

    var loop4 = function(i) {
        var specifications = new Specifications ({
            model: "Accessory test No."+ i +"'s model",
            dimensions: '153.6 x 76.5 x 9.2 mm (6.05 x 3.01 x 0.36 inches)',
            weight: '158 g (5.57 oz)',
            cpu: 'Octa-core 1.3 GHz Cortex-A53',
            gpu: 'Mali-T720MP3',
            ram_size_GB: 2,
            storage_size: 32,
            storage_uom: 'GB',
            memory_cards: 'microSD, up to 256 GB (dedicated slot)',
            scr_type: 'IPS LCD capacitive touchscreen, 16M colors, 1080 x 1920 pixels, 16:9 ratio',
            scr_size_INCH: 5.5,
            battery: 'Non-removable Li-Po 3300 mAh battery',
            os: 'Android 5.1.1 (Lollipop), upgradable to 6.0 (Marshmallow)',
            front_camera: '5 MP, f/2.2',
            back_camera: '13 MP, f/2.2, phase detection autofocus, dual-LED dual-tone flash',
            sim: 'Dual SIM (Micro-SIM, dual stand-by)',
            wifi: 'Wi-Fi 802.11 a/b/g/n/ac, Wi-Fi Direct, hotspot',
            usb: 'microUSB 2.0',
            bluetooth: '4.0, A2DP, LE',
        });
        console.log(++done + ' done !');
        specifications.save(function (err, result) {
            if (err) {
                console.log(err);
            }
            if (done === 60) {
                mongoose.disconnect();
            }
            if ( ++i < 15 ) {
                loop4(i);
            }
        });
    }

    loop1(0);
    loop2(0);
    loop3(0);
    loop4(0);
});