var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var Navbar_tab = require('./models/navbar_tab');

var indexRouter = require('./routes/index');
var aboutRouter = require('./routes/about');
var mobileTabletRouter = require('./routes/mobile&tablet')
var laptopRouter = require('./routes/laptop');
var usersRouter = require('./routes/users');

var app = express();

mongoose.connect('mongodb://localhost:27017/e-store');

//Restart server after each change in navbar_tab collection
console.log("Server starting.... ");
Navbar_tab.find({},function(err, tabs) {
  if (err) {
    console.error('Get navbar error:', err);
    return;
  }
  tabs.sort('order');
  app.locals.navbar_tabs = tabs; 
  
  console.log("Server started ! ");
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function (req, res) {
  res.redirect('/index');
});
app.use('/index', indexRouter);
app.use('/about', aboutRouter);
app.use('/mobile&tablet', mobileTabletRouter);
app.use('/laptop', laptopRouter);
app.use('/users', usersRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
