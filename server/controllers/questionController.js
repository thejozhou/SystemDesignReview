const questionModel = require('../models/questionModel.js');
const questionController = {};

questionController.getQuestions = (req, res, next) => {
  console.log('inside getQuestions --->');
  questionModel.selectAll().then((data) => {
    res.send(data);
  });
};
