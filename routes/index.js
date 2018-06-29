var express = require('express');
var router = express.Router();

var Product = require('../models/product');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/index');
});

router.get('/index', function(req, res, next) {
  console.log(req.user);
  console.log(req.token);
  Product.find()
  .populate({
    path: 'product_type',
    match: {name: 'Mobile'}  })
  .populate('manufacturer')
  .populate('accessories_type')
  .sort({created_date: -1})
  .exec(function(err, mobiles) {
    if (err) {
      console.log(err);
    }
    mobiles = mobiles.filter(function(mobile) {
      result = mobile.product_type && !mobile.deleted;
      if (mobile.manufacturer) {
        result = result && !mobile.manufacturer.deleted;
      }
      return result;
    });
    var top_new_mobiles = [];
    top_new_mobiles.push(mobiles.slice(0, 12));
    Product.find()
    .populate({
        path: 'product_type',
        match: {name: 'Tablet'}  })
    .sort({created_date: -1})
    .exec(function(err, tablets) {
      if (err) {
        console.log(err);
      }
      tablets = tablets.filter(function(tablet) {
        result = tablet.product_type && !tablet.deleted;
        if (tablet.manufacturer) {
          result = result && !tablet.manufacturer.deleted;
        }
        return result;
      });
      var top_new_tablets = [];
      top_new_tablets.push(tablets.slice(0, 12));
      Product.find()
      .populate({
          path: 'product_type',
          match: {name: 'Laptop'}  })
      .sort({created_date: -1})
      .exec(function(err, laptops) {
        if (err) {
          console.log(err);
        }
        laptops = laptops.filter(function(laptop) {
          result = laptop.product_type && !laptop.deleted;
          if (laptop.manufacturer) {
            result = result && !laptop.manufacturer.deleted;
          }
          return result;
          });
        var top_new_laptops = [];
        top_new_laptops.push(laptops.slice(0, 12));
        Product.find()
        .populate({
            path: 'product_type',
            match: {name: 'Phụ kiện'}  })
        .sort({created_date: -1})
        .exec(function(err, accessories_list) {
          if (err) {
            console.log(err);
          }
          accessories_list = accessories_list.filter(function(accessories) {
            result = accessories.product_type && !accessories.deleted;
            if (accessories.manufacturer) {
              result = result && !accessories.manufacturer.deleted;
            }
            if (accessories.accessories_type) {
              result = result && !accessories.accessories_type.deleted;
            }
            return result;
          });
          var top_new_accessories = [];
          top_new_accessories.push(accessories_list.slice(0, 12));
          res.render('index', { title: 'Express', mobiles:top_new_mobiles[0], tablets:top_new_tablets[0], laptops:top_new_laptops[0], accessories_list:top_new_accessories[0], errors: req.flash('error'), successes: req.flash('success')});
        })
      })
    })
  })
});

router.post('/checkout', isLoggedIn, function(req, res, next) {
  console.log(req.body);
});

module.exports = router;

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  req.flash('error', 'Vui lòng đăng nhập trước.');
  res.redirect('/#myModal');
};