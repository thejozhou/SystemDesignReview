const db = require('../db/index.js');

const questionModel = {
  selectAll : () => {
    return db.any('select * from "Questions"')
      .then(data => {
          console.log('Question Data ---> ', data);
          return data;
      })
      .catch(error => {
        console.log('ERROR:', error); // print the error;
      });
  },
};

module.exports = questionModel;
