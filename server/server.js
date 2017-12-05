var express = require('express');
var app = express();
const path = require('path');
var bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.get('*', function(req, res) {
//  res.sendFile(path.join(__dirname, '../public/index.html'));
//  });
app.listen(3000); //listens on port 3000 -> http://localhost:3000/
