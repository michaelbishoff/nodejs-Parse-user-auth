var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {message: 'you have cookie: ' + req.cookies['presence']});
});

module.exports = router;
