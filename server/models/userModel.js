const db = require('../db/index.js');
const bcrypt = require('bcrypt-nodejs');
const salt = bcrypt.genSaltSync(10);

const userModel = {

  selectAll : () => {
    return db.any('select * from "User"')
      .then(data => {
          return data;
      })
      .catch(error => {
          console.log('ERROR:', error);
      });
  },
  create: (user) => {
    const username = user.username;
    const password = bcrypt.hashSync(user.password, salt);
    const email = user.email;
    console.log("hashed password", password)
    let query = {
        text: 'INSERT INTO "User"(username, password, email) VALUES($1, $2, $3);',
        values: [username, password, email]
    }
    return db.none(query)
    .then(data => {
        return data;
    })
    .catch(error => {
        console.log('ERROR: ', error);
    })
  },
  findOne: (username) => {
    return db.one('SELECT * FROM "User" WHERE "username" = $1 LIMIT 1', username)
    .then(data => {
        return data;
    })
    .catch(error => {
        console.log('ERROR: ', error);
    });
  }
};

module.exports = userModel;
