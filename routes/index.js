var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  // query mongo DB

  // connection String: 
  //mongodb+srv://admin5:ETdaw6DAYIj48CW7@cluster0.0n8qgpd.mongodb.net/

  res.render('index', { title: 'MD19304 - AND103 - Lab 2' });
});

module.exports = router;
