var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', page: 'home' });
});


router.get('/mobile&tablet', function(req, res, next) {
  res.render('mobile&tablet', { title: 'Express', page: 'mobile&tablet' });
});
module.exports = router;
