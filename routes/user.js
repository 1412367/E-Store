var express = require('express');
var router = express.Router();
var csrf = require('csurf')
var passport = require('passport');

var csrfProtection = csrf();
router.use(csrfProtection);


router.get('/profile', isLoggedIn, function(req, res, next) {
  res.render('profile', { title: 'Express', errors: req.flash('error'), successes: req.flash('success')});
});

router.get('/logout', isLoggedIn, function(req, res, next) {
  req.logout();
  res.redirect('/');
});

//- Chặn user đã đăng nhập dùng các router bên dưới
router.use('/', notLoggedIn, function(req, res, next) {
  next();
});

router.get('/csrfToken', function(req, res, next) {
  res.json(req.csrfToken());
});

router.post('/signin', passport.authenticate('Local.signin', {
  successRedirect: '/user/profile',
  failureRedirect: '/#myModal',
  failureFlash: true
}));

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