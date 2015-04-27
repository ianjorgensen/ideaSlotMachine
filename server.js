var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.sendfile(__dirname + '/index.html');
});

app.use(express.static('static'));

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
