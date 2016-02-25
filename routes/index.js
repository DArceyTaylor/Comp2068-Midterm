var express = require('express');
var router = express.Router();

/* GET Landing page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Favourite People' });
});

/* GET People page. */
router.get('/people', function(req, res, next) {
  res.render('index', { title: 'People Page' });
});

/* GET Contact page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact' });
});



module.exports = router;
