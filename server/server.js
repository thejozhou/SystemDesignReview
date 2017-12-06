var express = require('express');
var app = express();
const path = require('path');
var bodyParser = require('body-parser');
var userController = require('./controllers/userController.js');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/login', userController.getAllUsers, function(req, res) {
  console.log('inside app.get callback')
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/profile', (req, res) => {

});

app.listen(3000); //listens on port 3000 -> http://localhost:3000/
