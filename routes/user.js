var express = require('express');
var router = express.Router();
var csrf = require('csurf')
var passport = require('passport');
var User = require('../models/user')

var csrfProtection = csrf();
router.use(csrfProtection);


router.get('/profile', isLoggedIn, function(req, res, next) {
  res.render('profile', { title: 'Express', user: req.user, errors: req.flash('error'), successes: req.flash('success')});
});

router.get('/logout', isLoggedIn, function(req, res, next) {
  req.logout();
  res.redirect('/');
});

router.post('/changepassword', isLoggedIn, function(req, res, next) {
  req.checkBody('oldpassword', 'Mật khẩu không hợp lệ (min 4 ký tự).').notEmpty().isLength({min:4});
  req.checkBody('newpassword', 'Mật khẩu không hợp lệ (min 4 ký tự).').notEmpty().isLength({min:4});
  var errors = req.validationErrors();
  if (errors) {
      var messages = [];
      errors.forEach(function(error) {
          messages.push(error.msg);
      })
      req.flash('error', messages);
      return res.redirect('/user/profile#change_password');
  }

  if (req.body.newpassword != req.body.confirmnewpassword) {
    req.flash('error','Nhập lại mật khẩu không đúng.');
    return res.redirect('/user/profile#change_password');
  }
  User.findOne({'email': req.user.email}, function(err, user) {
    if (err) {
      req.flash('error', err);
      return res.redirect('/user/profile#change_password');
    }
    if (!user.validPassword(req.body.oldpassword)) {
        req.flash('error','Sai mật khẩu.');
        return res.redirect('/user/profile#change_password');
    }
    user.password = user.encryptPassword(req.body.newpassword);
    user.save(function (err) {
        if (err) {
          req.flash('error', err);
          return res.redirect('/user/profile#change_password');
        }
        req.flash('success','Cập nhật mật khẩu thành công.');
        return res.redirect('/user/profile');
    });
  });
});

//- Chặn user đã đăng nhập dùng các router bên dưới
router.use('/', notLoggedIn, function(req, res, next) {
  next();
});

router.get('/csrfToken', function(req, res, next) {
  res.json(req.csrfToken());
});

router.post('/signin', function(req, res, next) {
  passport.authenticate('Local.signin', function(err, user, info) {
    if (err) { return next(err); }
    if (!user) { return res.redirect('/#myModal'); }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      if (user.role == 'admin')
        return res.redirect('/admin');
      else
        return res.redirect('/user/profile');
    });
  })(req, res, next);
});

router.post('/signup', passport.authenticate('Local.signup', {
  successRedirect: '/',
  failureRedirect: '/#myModal2',
  failureFlash: true
}));

module.exports = router;

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
};

function notLoggedIn(req, res, next) {
  if (!req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
};