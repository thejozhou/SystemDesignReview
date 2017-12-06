const express = require('express');
const app = express();
const path = require('path');
<<<<<<< HEAD
var bodyParser = require('body-parser');
var userController = require('./controllers/userController.js');
=======
const bodyParser = require('body-parser');
const config = require('./config/main.js');
>>>>>>> d5a2067e3fa1510f1028afd8c2d7eb6a47b8e270

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(logger('dev')); // Log requests to api using morgan

<<<<<<< HEAD
app.get('/login', userController.getAllUsers, function(req, res) {
  console.log('inside app.get callback')
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/profile', (req, res) => {

});

app.listen(3000); //listens on port 3000 -> http://localhost:3000/
=======
// app.get('*', function(req, res) {
//  res.sendFile(path.join(__dirname, '../public/index.html'));
//  });

app.all('/*', function(req, res, next) {
    // CORS headers
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
    res.header('Access-Control-Allow-Credentials', 'true');
    if (req.method == 'OPTIONS') {
        res.status(200).end();
    } else {
        next();
    }
});

// app.all('/api/v1/*', [require('./middlewares/validateRequest')]);

app.use('/', require('./router.js'));

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// app.listen(3000);
const server = app.listen(config.port); //listens on port 3000 -> http://localhost:3000/
// console.log('Your server is running on port ' + config.port + '.');
>>>>>>> d5a2067e3fa1510f1028afd8c2d7eb6a47b8e270
