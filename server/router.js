var express = require('express');
var router = express.Router();

var userController = require('./controllers/userController.js');

// Routes accessible by anyone
router.post('/login', userController.verifyUser);
router.post('/register', userController.createUser);

// Routes that can be accessed only by authenticated users
// router.get('/api/v1/profile', /*UserController.get method*/);
router.get('/api/v1/users', userController.getUsers);

// router.get('/api/v1/fun', questionController.yourmethod);

// Routes that can be accessed only by authenticated & authorized users


module.exports = router;
