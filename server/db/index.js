const pgp = require('pg-promise')();
const config = require('../config/main.js');

const db = pgp(config.database);

module.exports = db;