const db = require('../db/index.js');

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
};

module.exports = userModel;
