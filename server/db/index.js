const promise = require('bluebird'); // or any other Promise/A+ compatible library;
const config = require('../config/main.js');
const initOptions = {
  promiseLib : promise // use Bluebird instead of ES6 Promises
};
const pgp = require('pg-promise')(initOptions);
const db = pgp(config.database);

module.exports = db;
