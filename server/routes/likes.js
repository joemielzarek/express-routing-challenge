var express = require('express');
var router = express.Router();
var data = require('./data');

var likes0 = 0;
console.log(likes0);
var likes1 = 0;
var likes2 = 0;

// router.get('/', function(req, res) {
//   console.log('here!');
//   res.send(data);
// })
router.get('/gini', function(req, res) {
  console.log('likes0 before');
  likes0++;
  console.log('likes0 after');
  res.send(likes0);
})

router.get('/pat', function(req, res) {
  console.log('here!');
  res.send(likes1);
})

router.get('/joe', function(req, res) {
  console.log('here!');
  res.send(likes2);
})


router.post('/gini', function(req, res) {
  res.send(likes0);
});

router.post('/pat', function(req, res) {
  res.send(likes1);
});

router.post('/joe', function(req, res) {
  res.send(likes2);
});


module.exports = router;
