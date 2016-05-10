var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  console.log('here!');
  res.send('hello!');
})

module.exports = router;
