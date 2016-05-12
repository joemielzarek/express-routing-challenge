var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');
var data = require('./routes/data');

// Set port number to 3000
app.set('port', 3000);

app.use('/bios', data);

app.get('/*', function(req, res) {
  console.log('request params', req.params);
  var file = req.params[0] || 'views/index.html';
  res.sendFile(path.join(__dirname, "./public", file));
});

app.listen(app.get('port'), function() {
  console.log('Server is ready on port:' + app.get('port'));
});
