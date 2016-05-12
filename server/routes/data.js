var express = require('express');
var router = express.Router();
var data = require('../data/urlee_risers_info.json');
var likes = require('./likes.js');

router.get('/', function(req, res) {
  console.log('data.js router.get!');
  res.send(data);
})

router.post('/', function(req, res) {
  res.send(likes);
});


module.exports = router;
