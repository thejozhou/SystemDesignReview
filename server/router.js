var express = require('express');
var router = express.Router();

// var auth = require('./auth.js');
// var user = require('./users.js');
var userController = require('./controllers/userController.js');
var questionController = require('./controllers/questionController.js');

// Routes accessible by anyone
// router.post('/login', auth.login);

// Routes that can be accessed only by authenticated users
// router.get('/api/v1/profile', /*UserController.get method*/);
router.get('/api/v1/questions', questionController.getQuestions);
router.get('/api/v1/users', userController.getUsers);


// Routes that can be accessed only by authenticated & authorized users


module.exports = router;
