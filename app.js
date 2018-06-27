var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var session = require('express-session');
var passport = require('passport');
var flash = require('connect-flash');
var validator = require('express-validator');

var Navbar_tab = require('./models/navbar_tab');

var indexRouter = require('./routes/index');
var adminRouter = require('./routes/admin');
var aboutRouter = require('./routes/about');
var mobileTabletRouter = require('./routes/mobile&tablet')
var laptopRouter = require('./routes/laptop');
var accessoriesRouter = require('./routes/accessories');
var productRouter = require('./routes/product');
var userRouter = require('./routes/user');

var app = express();

mongoose.connect('mongodb://localhost:27017/e-store');
require('./config/passport');

//Restart server after each change in those table collection
console.log("Navbar is loading....");
Navbar_tab.find()
.sort('order')
.exec(function(err, tabs) {
  if (err) {
    console.error('Get navbar error:', err);
    return;
  }
  app.locals.navbar_tabs = tabs.filter(function(tab) {
    return !tab.deleted;
  });
    
  console.log("Navbar loaded ! ");
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(validator());
app.use(cookieParser());
app.use(session({secret: 'mysupersecret', resave: false, saveUninitialized: false}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use('/public', express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  res.locals.signin = req.isAuthenticated();
  next();
})

app.use('/', indexRouter);adminRouter
app.use('/about', aboutRouter);
app.use('/mobile&tablet', mobileTabletRouter);
app.use('/laptop', laptopRouter);
app.use('/accessories', accessoriesRouter);
app.use('/product', productRouter);

app.use('/admin', adminRouter);

app.use('/user', userRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  //next(createError(404));
  res.render('404');
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;
