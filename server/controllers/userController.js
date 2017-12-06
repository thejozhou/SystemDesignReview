const userModel = require('../models/userModel.js');
const userController = {};

userController.getUsers = (req, res, next) => {
  userModel.selectAll().then((data) => {

    res.send(data);
  });
};

/**
* createUser - create a new User model and then save the user to the database.
*/
// userController.createUser = (req, res, next) => {
//   User.create(req.body, (err, result) => {
//     if (err) {
//       return res.render('./../client/signup', {error: err});
//     }
//     req.currentUserId = result._id;
//     next();
//   });
// };

/**
* verifyUser - Obtain username and password from the request body, locate
* the appropriate user in the database, and then authenticate the submitted password
* against the password stored in the database.
**/
// userController.verifyUser = (req, res, next) => {
//   console.log('verify user ', req.body);
//   const verify = new Promise((resolve, reject) => {
//     User.findOne({username: req.body.username}, (err, doc) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(doc);
//       }
//     });
//   });
//   verify
//     .then((result) => {
//       if (result.length === 0) {
//         return res.redirect('/signup');
//       } else {
//         console.log('result: ', result);
//         console.log(User);
//         result.comparePassword(req.body.password, (isMatch) => {
//           if (isMatch) {
//             req.currentUserId = result._id;
//             next();
//           } else {
//             res.redirect('/');
//           }
//         });
//         // bcrypt.compare(req.body.password, result.password, function(err, isMatch) {
//         //     if (err) return console.log(err);
//         //     if (isMatch) {
//         //       req.currentUserId = result._id;
//         //       next();
//         //     } else {
//         //       res.redirect('/');
//         //     }
//         // });
//       }
//     })
//     .catch((err) => {
//       console.log('error: ', err);
//     });
// };

module.exports = userController;
