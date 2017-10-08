var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Adams Point Community Council' });
});

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

/* GET signup page. */
router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Signup' });
});

/* POST login info. */
router.post('/login', function(req, res, next) {
  res.send(req.body);
});

/* POST signup info. */
router.post('/signup', function(req, res, next) {
  res.send(req.body);
});

module.exports = router;
