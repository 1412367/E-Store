var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var Navbar_tab = require('./models/navbar_tab');
var Manufacturer = require('./models/manufacturer');
var Accessories_type = require('./models/accessories_type');

var indexRouter = require('./routes/index');
var adminRouter = require('./routes/admin');
var aboutRouter = require('./routes/about');
var mobileTabletRouter = require('./routes/mobile&tablet')
var laptopRouter = require('./routes/laptop');
var accessoriesRouter = require('./routes/accessories');
var productRouter = require('./routes/product');
var usersRouter = require('./routes/users');

var app = express();

mongoose.connect('mongodb://localhost:27017/e-store');

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
console.log("Manufacturer list is loading....");
Manufacturer.find()
.sort('name')
.exec(function(err, manufacturers) {
  if (err) {
    console.error('Get manufacturers list error:', err);
    return;
  }
  app.locals.manufacturer_list = manufacturers.filter(function(manufacturer) {
    return !manufacturer.deleted;
  });
  console.log("Manufacturer list loaded !");
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/', indexRouter);adminRouter
app.use('/about', aboutRouter);
app.use('/mobile&tablet', mobileTabletRouter);
app.use('/laptop', laptopRouter);
app.use('/accessories', accessoriesRouter);
app.use('/product', productRouter);

app.use('/admin', adminRouter);

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
