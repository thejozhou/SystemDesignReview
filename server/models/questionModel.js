const db = require('../db/index.js');
const questionModel = {
  selectAll : () => {
    return db.any('SELECT "Questions"."question", "Answers"."answers" FROM "Answers" INNER JOIN "Questions" ON "Questions"."answer"="Answers"."id";')
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
