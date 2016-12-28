var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
}).get('/bundle.js', function (req, res) {
  res.sendFile(__dirname + '/bundle.js');
}).get('/main.css', function (req, res) {
  res.sendFile(__dirname + '/main.css');
})

app.listen(9999, function () {
  console.log('Example app listening on port 9999')
})
