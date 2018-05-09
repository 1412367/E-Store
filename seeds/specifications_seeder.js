var Specifications = require('../models/specifications');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/e-store');

Specifications.on('index', err => {
    if (err) {
        console.error('Indexes could not be created:', err);
        return;
    }

    var specificationsArray = [
        new Specifications ({
            model: '8 Dell Vostro 5470 (W560714TH)',
            dimensions: '',
            weight: '1.15 Kg',
            cpu: 'Intel® 4th Generation Core™ i5-4200U Processor (3M Cache, up to 2.60 GHz)',
            gpu: 'Intel® HD Graphics 4400, NVIDIA GeForce GT 740M 2 GB',
            ram: 'Up to 8GB supported, 4 GB DDR3 1600 Mhz',
            storage: 'SATA HDD 500 GB, 5400 RPM',
            memory_cards: '',
            display: 'HD LED Anti-glare Display 14.0 inches, 1366 x 768 pixels',
            battery: '3-cell Lithium Ion',
            os: 'Ubuntu',
            front_camera: '1.0 MP, 720p HD',
            back_camera: '',
            sim: '',
            wifi: '	802.11 b/g/n',
            usb: '',
            bluetooth: '4.0',
        }),
        new Specifications ({
            model: '7 Dell Vostro 5470 (W560714TH)',
            dimensions: '',
            weight: '1.15 Kg',
            cpu: 'Intel® 4th Generation Core™ i5-4200U Processor (3M Cache, up to 2.60 GHz)',
            gpu: 'Intel® HD Graphics 4400, NVIDIA GeForce GT 740M 2 GB',
            ram: 'Up to 8GB supported, 4 GB DDR3 1600 Mhz',
            storage: 'SATA HDD 500 GB, 5400 RPM',
            memory_cards: '',
            display: 'HD LED Anti-glare Display 14.0 inches, 1366 x 768 pixels',
            battery: '3-cell Lithium Ion',
            os: 'Ubuntu',
            front_camera: '1.0 MP, 720p HD',
            back_camera: '',
            sim: '',
            wifi: '	802.11 b/g/n',
            usb: '',
            bluetooth: '4.0',
        }),
        new Specifications ({
            model: '6 Dell Vostro 5470 (W560714TH)',
            dimensions: '',
            weight: '1.15 Kg',
            cpu: 'Intel® 4th Generation Core™ i5-4200U Processor (3M Cache, up to 2.60 GHz)',
            gpu: 'Intel® HD Graphics 4400, NVIDIA GeForce GT 740M 2 GB',
            ram: 'Up to 8GB supported, 4 GB DDR3 1600 Mhz',
            storage: 'SATA HDD 500 GB, 5400 RPM',
            memory_cards: '',
            display: 'HD LED Anti-glare Display 14.0 inches, 1366 x 768 pixels',
            battery: '3-cell Lithium Ion',
            os: 'Ubuntu',
            front_camera: '1.0 MP, 720p HD',
            back_camera: '',
            sim: '',
            wifi: '	802.11 b/g/n',
            usb: '',
            bluetooth: '4.0',
        }),
        new Specifications ({
            model: '5 Dell Vostro 5470 (W560714TH)',
            dimensions: '',
            weight: '1.15 Kg',
            cpu: 'Intel® 4th Generation Core™ i5-4200U Processor (3M Cache, up to 2.60 GHz)',
            gpu: 'Intel® HD Graphics 4400, NVIDIA GeForce GT 740M 2 GB',
            ram: 'Up to 8GB supported, 4 GB DDR3 1600 Mhz',
            storage: 'SATA HDD 500 GB, 5400 RPM',
            memory_cards: '',
            display: 'HD LED Anti-glare Display 14.0 inches, 1366 x 768 pixels',
            battery: '3-cell Lithium Ion',
            os: 'Ubuntu',
            front_camera: '1.0 MP, 720p HD',
            back_camera: '',
            sim: '',
            wifi: '	802.11 b/g/n',
            usb: '',
            bluetooth: '4.0',
        }),
        new Specifications ({
            model: '4 Dell Vostro 5470 (W560714TH)',
            dimensions: '',
            weight: '1.15 Kg',
            cpu: 'Intel® 4th Generation Core™ i5-4200U Processor (3M Cache, up to 2.60 GHz)',
            gpu: 'Intel® HD Graphics 4400, NVIDIA GeForce GT 740M 2 GB',
            ram: 'Up to 8GB supported, 4 GB DDR3 1600 Mhz',
            storage: 'SATA HDD 500 GB, 5400 RPM',
            memory_cards: '',
            display: 'HD LED Anti-glare Display 14.0 inches, 1366 x 768 pixels',
            battery: '3-cell Lithium Ion',
            os: 'Ubuntu',
            front_camera: '1.0 MP, 720p HD',
            back_camera: '',
            sim: '',
            wifi: '	802.11 b/g/n',
            usb: '',
            bluetooth: '4.0',
        }),
        new Specifications ({
            model: '3 Dell Vostro 5470 (W560714TH)',
            dimensions: '',
            weight: '1.15 Kg',
            cpu: 'Intel® 4th Generation Core™ i5-4200U Processor (3M Cache, up to 2.60 GHz)',
            gpu: 'Intel® HD Graphics 4400, NVIDIA GeForce GT 740M 2 GB',
            ram: 'Up to 8GB supported, 4 GB DDR3 1600 Mhz',
            storage: 'SATA HDD 500 GB, 5400 RPM',
            memory_cards: '',
            display: 'HD LED Anti-glare Display 14.0 inches, 1366 x 768 pixels',
            battery: '3-cell Lithium Ion',
            os: 'Ubuntu',
            front_camera: '1.0 MP, 720p HD',
            back_camera: '',
            sim: '',
            wifi: '	802.11 b/g/n',
            usb: '',
            bluetooth: '4.0',
        }),
        new Specifications ({
            model: '2 Dell Vostro 5470 (W560714TH)',
            dimensions: '',
            weight: '1.15 Kg',
            cpu: 'Intel® 4th Generation Core™ i5-4200U Processor (3M Cache, up to 2.60 GHz)',
            gpu: 'Intel® HD Graphics 4400, NVIDIA GeForce GT 740M 2 GB',
            ram: 'Up to 8GB supported, 4 GB DDR3 1600 Mhz',
            storage: 'SATA HDD 500 GB, 5400 RPM',
            memory_cards: '',
            display: 'HD LED Anti-glare Display 14.0 inches, 1366 x 768 pixels',
            battery: '3-cell Lithium Ion',
            os: 'Ubuntu',
            front_camera: '1.0 MP, 720p HD',
            back_camera: '',
            sim: '',
            wifi: '	802.11 b/g/n',
            usb: '',
            bluetooth: '4.0',
        }),
        new Specifications ({
            model: '1 Dell Vostro 5470 (W560714TH)',
            dimensions: '',
            weight: '1.15 Kg',
            cpu: 'Intel® 4th Generation Core™ i5-4200U Processor (3M Cache, up to 2.60 GHz)',
            gpu: 'Intel® HD Graphics 4400, NVIDIA GeForce GT 740M 2 GB',
            ram: 'Up to 8GB supported, 4 GB DDR3 1600 Mhz',
            storage: 'SATA HDD 500 GB, 5400 RPM',
            memory_cards: '',
            display: 'HD LED Anti-glare Display 14.0 inches, 1366 x 768 pixels',
            battery: '3-cell Lithium Ion',
            os: 'Ubuntu',
            front_camera: '1.0 MP, 720p HD',
            back_camera: '',
            sim: '',
            wifi: '	802.11 b/g/n',
            usb: '',
            bluetooth: '4.0',
        }),
        new Specifications ({
            model: '15 Lenovo Vibe K4 Note A7010',
            dimensions: '153.6 x 76.5 x 9.2 mm (6.05 x 3.01 x 0.36 inches)',
            weight: '158 g (5.57 oz)',
            cpu: 'Octa-core 1.3 GHz Cortex-A53',
            gpu: 'Mali-T720MP3',
            ram: '2 GB RAM',
            storage: '32 GB',
            memory_cards: 'microSD, up to 256 GB (dedicated slot)',
            display: 'IPS LCD capacitive touchscreen, 16M colors, 5.5 inches, 1080 x 1920 pixels, 16:9 ratio',
            battery: 'Non-removable Li-Po 3300 mAh battery',
            os: 'Android 5.1.1 (Lollipop), upgradable to 6.0 (Marshmallow)',
            front_camera: '5 MP, f/2.2',
            back_camera: '13 MP, f/2.2, phase detection autofocus, dual-LED dual-tone flash',
            sim: 'Dual SIM (Micro-SIM, dual stand-by)',
            wifi: 'Wi-Fi 802.11 a/b/g/n/ac, Wi-Fi Direct, hotspot',
            usb: 'microUSB 2.0',
            bluetooth: '4.0, A2DP, LE',
        }),
        new Specifications ({
            model: '14 Lenovo Vibe K4 Note A7010',
            dimensions: '153.6 x 76.5 x 9.2 mm (6.05 x 3.01 x 0.36 inches)',
            weight: '158 g (5.57 oz)',
            cpu: 'Octa-core 1.3 GHz Cortex-A53',
            gpu: 'Mali-T720MP3',
            ram: '2 GB RAM',
            storage: '32 GB',
            memory_cards: 'microSD, up to 256 GB (dedicated slot)',
            display: 'IPS LCD capacitive touchscreen, 16M colors, 5.5 inches, 1080 x 1920 pixels, 16:9 ratio',
            battery: 'Non-removable Li-Po 3300 mAh battery',
            os: 'Android 5.1.1 (Lollipop), upgradable to 6.0 (Marshmallow)',
            front_camera: '5 MP, f/2.2',
            back_camera: '13 MP, f/2.2, phase detection autofocus, dual-LED dual-tone flash',
            sim: 'Dual SIM (Micro-SIM, dual stand-by)',
            wifi: 'Wi-Fi 802.11 a/b/g/n/ac, Wi-Fi Direct, hotspot',
            usb: 'microUSB 2.0',
            bluetooth: '4.0, A2DP, LE',
        }),
        new Specifications ({
            model: '13 Lenovo Vibe K4 Note A7010',
            dimensions: '153.6 x 76.5 x 9.2 mm (6.05 x 3.01 x 0.36 inches)',
            weight: '158 g (5.57 oz)',
            cpu: 'Octa-core 1.3 GHz Cortex-A53',
            gpu: 'Mali-T720MP3',
            ram: '2 GB RAM',
            storage: '32 GB',
            memory_cards: 'microSD, up to 256 GB (dedicated slot)',
            display: 'IPS LCD capacitive touchscreen, 16M colors, 5.5 inches, 1080 x 1920 pixels, 16:9 ratio',
            battery: 'Non-removable Li-Po 3300 mAh battery',
            os: 'Android 5.1.1 (Lollipop), upgradable to 6.0 (Marshmallow)',
            front_camera: '5 MP, f/2.2',
            back_camera: '13 MP, f/2.2, phase detection autofocus, dual-LED dual-tone flash',
            sim: 'Dual SIM (Micro-SIM, dual stand-by)',
            wifi: 'Wi-Fi 802.11 a/b/g/n/ac, Wi-Fi Direct, hotspot',
            usb: 'microUSB 2.0',
            bluetooth: '4.0, A2DP, LE',
        }),
        new Specifications ({
            model: '12 Lenovo Vibe K4 Note A7010',
            dimensions: '153.6 x 76.5 x 9.2 mm (6.05 x 3.01 x 0.36 inches)',
            weight: '158 g (5.57 oz)',
            cpu: 'Octa-core 1.3 GHz Cortex-A53',
            gpu: 'Mali-T720MP3',
            ram: '2 GB RAM',
            storage: '32 GB',
            memory_cards: 'microSD, up to 256 GB (dedicated slot)',
            display: 'IPS LCD capacitive touchscreen, 16M colors, 5.5 inches, 1080 x 1920 pixels, 16:9 ratio',
            battery: 'Non-removable Li-Po 3300 mAh battery',
            os: 'Android 5.1.1 (Lollipop), upgradable to 6.0 (Marshmallow)',
            front_camera: '5 MP, f/2.2',
            back_camera: '13 MP, f/2.2, phase detection autofocus, dual-LED dual-tone flash',
            sim: 'Dual SIM (Micro-SIM, dual stand-by)',
            wifi: 'Wi-Fi 802.11 a/b/g/n/ac, Wi-Fi Direct, hotspot',
            usb: 'microUSB 2.0',
            bluetooth: '4.0, A2DP, LE',
        }),
        new Specifications ({
            model: '11 Lenovo Vibe K4 Note A7010',
            dimensions: '153.6 x 76.5 x 9.2 mm (6.05 x 3.01 x 0.36 inches)',
            weight: '158 g (5.57 oz)',
            cpu: 'Octa-core 1.3 GHz Cortex-A53',
            gpu: 'Mali-T720MP3',
            ram: '2 GB RAM',
            storage: '32 GB',
            memory_cards: 'microSD, up to 256 GB (dedicated slot)',
            display: 'IPS LCD capacitive touchscreen, 16M colors, 5.5 inches, 1080 x 1920 pixels, 16:9 ratio',
            battery: 'Non-removable Li-Po 3300 mAh battery',
            os: 'Android 5.1.1 (Lollipop), upgradable to 6.0 (Marshmallow)',
            front_camera: '5 MP, f/2.2',
            back_camera: '13 MP, f/2.2, phase detection autofocus, dual-LED dual-tone flash',
            sim: 'Dual SIM (Micro-SIM, dual stand-by)',
            wifi: 'Wi-Fi 802.11 a/b/g/n/ac, Wi-Fi Direct, hotspot',
            usb: 'microUSB 2.0',
            bluetooth: '4.0, A2DP, LE',
        }),
        new Specifications ({
            model: '10 Lenovo Vibe K4 Note A7010',
            dimensions: '153.6 x 76.5 x 9.2 mm (6.05 x 3.01 x 0.36 inches)',
            weight: '158 g (5.57 oz)',
            cpu: 'Octa-core 1.3 GHz Cortex-A53',
            gpu: 'Mali-T720MP3',
            ram: '2 GB RAM',
            storage: '32 GB',
            memory_cards: 'microSD, up to 256 GB (dedicated slot)',
            display: 'IPS LCD capacitive touchscreen, 16M colors, 5.5 inches, 1080 x 1920 pixels, 16:9 ratio',
            battery: 'Non-removable Li-Po 3300 mAh battery',
            os: 'Android 5.1.1 (Lollipop), upgradable to 6.0 (Marshmallow)',
            front_camera: '5 MP, f/2.2',
            back_camera: '13 MP, f/2.2, phase detection autofocus, dual-LED dual-tone flash',
            sim: 'Dual SIM (Micro-SIM, dual stand-by)',
            wifi: 'Wi-Fi 802.11 a/b/g/n/ac, Wi-Fi Direct, hotspot',
            usb: 'microUSB 2.0',
            bluetooth: '4.0, A2DP, LE',
        }),
        new Specifications ({
            model: '9 Lenovo Vibe K4 Note A7010',
            dimensions: '153.6 x 76.5 x 9.2 mm (6.05 x 3.01 x 0.36 inches)',
            weight: '158 g (5.57 oz)',
            cpu: 'Octa-core 1.3 GHz Cortex-A53',
            gpu: 'Mali-T720MP3',
            ram: '2 GB RAM',
            storage: '32 GB',
            memory_cards: 'microSD, up to 256 GB (dedicated slot)',
            display: 'IPS LCD capacitive touchscreen, 16M colors, 5.5 inches, 1080 x 1920 pixels, 16:9 ratio',
            battery: 'Non-removable Li-Po 3300 mAh battery',
            os: 'Android 5.1.1 (Lollipop), upgradable to 6.0 (Marshmallow)',
            front_camera: '5 MP, f/2.2',
            back_camera: '13 MP, f/2.2, phase detection autofocus, dual-LED dual-tone flash',
            sim: 'Dual SIM (Micro-SIM, dual stand-by)',
            wifi: 'Wi-Fi 802.11 a/b/g/n/ac, Wi-Fi Direct, hotspot',
            usb: 'microUSB 2.0',
            bluetooth: '4.0, A2DP, LE',
        }),
        new Specifications ({
            model: '8 Lenovo Vibe K4 Note A7010',
            dimensions: '153.6 x 76.5 x 9.2 mm (6.05 x 3.01 x 0.36 inches)',
            weight: '158 g (5.57 oz)',
            cpu: 'Octa-core 1.3 GHz Cortex-A53',
            gpu: 'Mali-T720MP3',
            ram: '2 GB RAM',
            storage: '32 GB',
            memory_cards: 'microSD, up to 256 GB (dedicated slot)',
            display: 'IPS LCD capacitive touchscreen, 16M colors, 5.5 inches, 1080 x 1920 pixels, 16:9 ratio',
            battery: 'Non-removable Li-Po 3300 mAh battery',
            os: 'Android 5.1.1 (Lollipop), upgradable to 6.0 (Marshmallow)',
            front_camera: '5 MP, f/2.2',
            back_camera: '13 MP, f/2.2, phase detection autofocus, dual-LED dual-tone flash',
            sim: 'Dual SIM (Micro-SIM, dual stand-by)',
            wifi: 'Wi-Fi 802.11 a/b/g/n/ac, Wi-Fi Direct, hotspot',
            usb: 'microUSB 2.0',
            bluetooth: '4.0, A2DP, LE',
        }),
        new Specifications ({
            model: '7 Lenovo Vibe K4 Note A7010',
            dimensions: '153.6 x 76.5 x 9.2 mm (6.05 x 3.01 x 0.36 inches)',
            weight: '158 g (5.57 oz)',
            cpu: 'Octa-core 1.3 GHz Cortex-A53',
            gpu: 'Mali-T720MP3',
            ram: '2 GB RAM',
            storage: '32 GB',
            memory_cards: 'microSD, up to 256 GB (dedicated slot)',
            display: 'IPS LCD capacitive touchscreen, 16M colors, 5.5 inches, 1080 x 1920 pixels, 16:9 ratio',
            battery: 'Non-removable Li-Po 3300 mAh battery',
            os: 'Android 5.1.1 (Lollipop), upgradable to 6.0 (Marshmallow)',
            front_camera: '5 MP, f/2.2',
            back_camera: '13 MP, f/2.2, phase detection autofocus, dual-LED dual-tone flash',
            sim: 'Dual SIM (Micro-SIM, dual stand-by)',
            wifi: 'Wi-Fi 802.11 a/b/g/n/ac, Wi-Fi Direct, hotspot',
            usb: 'microUSB 2.0',
            bluetooth: '4.0, A2DP, LE',
        }),
        new Specifications ({
            model: '6 Lenovo Vibe K4 Note A7010',
            dimensions: '153.6 x 76.5 x 9.2 mm (6.05 x 3.01 x 0.36 inches)',
            weight: '158 g (5.57 oz)',
            cpu: 'Octa-core 1.3 GHz Cortex-A53',
            gpu: 'Mali-T720MP3',
            ram: '2 GB RAM',
            storage: '32 GB',
            memory_cards: 'microSD, up to 256 GB (dedicated slot)',
            display: 'IPS LCD capacitive touchscreen, 16M colors, 5.5 inches, 1080 x 1920 pixels, 16:9 ratio',
            battery: 'Non-removable Li-Po 3300 mAh battery',
            os: 'Android 5.1.1 (Lollipop), upgradable to 6.0 (Marshmallow)',
            front_camera: '5 MP, f/2.2',
            back_camera: '13 MP, f/2.2, phase detection autofocus, dual-LED dual-tone flash',
            sim: 'Dual SIM (Micro-SIM, dual stand-by)',
            wifi: 'Wi-Fi 802.11 a/b/g/n/ac, Wi-Fi Direct, hotspot',
            usb: 'microUSB 2.0',
            bluetooth: '4.0, A2DP, LE',
        }),
        new Specifications ({
            model: '5 Lenovo Vibe K4 Note A7010',
            dimensions: '153.6 x 76.5 x 9.2 mm (6.05 x 3.01 x 0.36 inches)',
            weight: '158 g (5.57 oz)',
            cpu: 'Octa-core 1.3 GHz Cortex-A53',
            gpu: 'Mali-T720MP3',
            ram: '2 GB RAM',
            storage: '32 GB',
            memory_cards: 'microSD, up to 256 GB (dedicated slot)',
            display: 'IPS LCD capacitive touchscreen, 16M colors, 5.5 inches, 1080 x 1920 pixels, 16:9 ratio',
            battery: 'Non-removable Li-Po 3300 mAh battery',
            os: 'Android 5.1.1 (Lollipop), upgradable to 6.0 (Marshmallow)',
            front_camera: '5 MP, f/2.2',
            back_camera: '13 MP, f/2.2, phase detection autofocus, dual-LED dual-tone flash',
            sim: 'Dual SIM (Micro-SIM, dual stand-by)',
            wifi: 'Wi-Fi 802.11 a/b/g/n/ac, Wi-Fi Direct, hotspot',
            usb: 'microUSB 2.0',
            bluetooth: '4.0, A2DP, LE',
        }),
        new Specifications ({
            model: '4 Lenovo Vibe K4 Note A7010',
            dimensions: '153.6 x 76.5 x 9.2 mm (6.05 x 3.01 x 0.36 inches)',
            weight: '158 g (5.57 oz)',
            cpu: 'Octa-core 1.3 GHz Cortex-A53',
            gpu: 'Mali-T720MP3',
            ram: '2 GB RAM',
            storage: '32 GB',
            memory_cards: 'microSD, up to 256 GB (dedicated slot)',
            display: 'IPS LCD capacitive touchscreen, 16M colors, 5.5 inches, 1080 x 1920 pixels, 16:9 ratio',
            battery: 'Non-removable Li-Po 3300 mAh battery',
            os: 'Android 5.1.1 (Lollipop), upgradable to 6.0 (Marshmallow)',
            front_camera: '5 MP, f/2.2',
            back_camera: '13 MP, f/2.2, phase detection autofocus, dual-LED dual-tone flash',
            sim: 'Dual SIM (Micro-SIM, dual stand-by)',
            wifi: 'Wi-Fi 802.11 a/b/g/n/ac, Wi-Fi Direct, hotspot',
            usb: 'microUSB 2.0',
            bluetooth: '4.0, A2DP, LE',
        }),
        new Specifications ({
            model: '3 Lenovo Vibe K4 Note A7010',
            dimensions: '153.6 x 76.5 x 9.2 mm (6.05 x 3.01 x 0.36 inches)',
            weight: '158 g (5.57 oz)',
            cpu: 'Octa-core 1.3 GHz Cortex-A53',
            gpu: 'Mali-T720MP3',
            ram: '2 GB RAM',
            storage: '32 GB',
            memory_cards: 'microSD, up to 256 GB (dedicated slot)',
            display: 'IPS LCD capacitive touchscreen, 16M colors, 5.5 inches, 1080 x 1920 pixels, 16:9 ratio',
            battery: 'Non-removable Li-Po 3300 mAh battery',
            os: 'Android 5.1.1 (Lollipop), upgradable to 6.0 (Marshmallow)',
            front_camera: '5 MP, f/2.2',
            back_camera: '13 MP, f/2.2, phase detection autofocus, dual-LED dual-tone flash',
            sim: 'Dual SIM (Micro-SIM, dual stand-by)',
            wifi: 'Wi-Fi 802.11 a/b/g/n/ac, Wi-Fi Direct, hotspot',
            usb: 'microUSB 2.0',
            bluetooth: '4.0, A2DP, LE',
        }),
        new Specifications ({
            model: '2 Lenovo Vibe K4 Note A7010',
            dimensions: '153.6 x 76.5 x 9.2 mm (6.05 x 3.01 x 0.36 inches)',
            weight: '158 g (5.57 oz)',
            cpu: 'Octa-core 1.3 GHz Cortex-A53',
            gpu: 'Mali-T720MP3',
            ram: '2 GB RAM',
            storage: '32 GB',
            memory_cards: 'microSD, up to 256 GB (dedicated slot)',
            display: 'IPS LCD capacitive touchscreen, 16M colors, 5.5 inches, 1080 x 1920 pixels, 16:9 ratio',
            battery: 'Non-removable Li-Po 3300 mAh battery',
            os: 'Android 5.1.1 (Lollipop), upgradable to 6.0 (Marshmallow)',
            front_camera: '5 MP, f/2.2',
            back_camera: '13 MP, f/2.2, phase detection autofocus, dual-LED dual-tone flash',
            sim: 'Dual SIM (Micro-SIM, dual stand-by)',
            wifi: 'Wi-Fi 802.11 a/b/g/n/ac, Wi-Fi Direct, hotspot',
            usb: 'microUSB 2.0',
            bluetooth: '4.0, A2DP, LE',
        }),
        new Specifications ({
            model: '1 Lenovo Vibe K4 Note A7010',
            dimensions: '153.6 x 76.5 x 9.2 mm (6.05 x 3.01 x 0.36 inches)',
            weight: '158 g (5.57 oz)',
            cpu: 'Octa-core 1.3 GHz Cortex-A53',
            gpu: 'Mali-T720MP3',
            ram: '2 GB RAM',
            storage: '32 GB',
            memory_cards: 'microSD, up to 256 GB (dedicated slot)',
            display: 'IPS LCD capacitive touchscreen, 16M colors, 5.5 inches, 1080 x 1920 pixels, 16:9 ratio',
            battery: 'Non-removable Li-Po 3300 mAh battery',
            os: 'Android 5.1.1 (Lollipop), upgradable to 6.0 (Marshmallow)',
            front_camera: '5 MP, f/2.2',
            back_camera: '13 MP, f/2.2, phase detection autofocus, dual-LED dual-tone flash',
            sim: 'Dual SIM (Micro-SIM, dual stand-by)',
            wifi: 'Wi-Fi 802.11 a/b/g/n/ac, Wi-Fi Direct, hotspot',
            usb: 'microUSB 2.0',
            bluetooth: '4.0, A2DP, LE',
        }),
        new Specifications ({
            model: '1',
            dimensions: '',
            weight: '',
            cpu: '',
            gpu: '',
            ram: '',
            storage: '',
            memory_cards: '',
            display: '',
            battery: '',
            os: '',
            front_camera: '',
            back_camera: '',
            sim: '',
            wifi: '',
            usb: '',
            bluetooth: '',
        })
    ]

    var done = 0;

    for (var i = 0; i < specificationsArray.length; i++) {
        specificationsArray[i].save(function (err, result) {
            
            if (err) {
                console.log(err);
            }

            done++;
            if (done === specificationsArray.length) {
                mongoose.disconnect();
            }
        });
    }
});