const userModel = require('../models/userModel.js');
const config = require('../config/main.js');
const bcrypt = require('bcrypt-nodejs')
const salt = bcrypt.genSaltSync(10);
const jwt = require('jwt-simple');

const userController = {

  getUsers: (req, res, next) => {
    userModel.selectAll()
    .then((data) => {
      res.status(200)
      .json({
        status: 'success',
        data: data,
        message: 'Retrieved ALL users'
      });
    })
    .catch((err) => {
      return next(err);
    });
  },

  createUser: (req, res, next) => {
    userModel.create(req.body)
      .then((data) => {
      res.status(200)
      res.json({
      status: 'success',
      message: 'Created new user'
      });
    })
    .catch((err) => {
      return next(err);
    })
  },

  verifyUser: (req, res, next) => {
    username = req.body.username;
    password = req.body.password;

    userModel.findOne(username)
    .then((result) => {
      if (!result) {
        res.status(401);
        res.json({
          status: 401,
          message: "Invalid credentials"
        });
        return;
      };
      const verifyPassword = bcrypt.compareSync(password, result.password);
      if (result.username !== username || !verifyPassword) {
        res.status(401);
        res.json({
          status: 401,
          message: "Invalid credentials"
        });
        return;
      } else {
        res.status(200)
        res.json(
          genToken(result)
        )
      }
    })
    .catch((err) => {
      console.log('error: ', err);
    });
  }
}

genToken = (user) => {
  const expires = expiresIn(7);
  const token = jwt.encode({
    exp: expires
  }, config.secret);
  return {
    status: 'success',
    token: token,
    expires: expires,
    user: user
  };
}

expiresIn = (numDays) => {
  const dateObj = new Date();
  return dateObj.setDate(dateObj.getDate() + numDays);
}

module.exports = userController;
