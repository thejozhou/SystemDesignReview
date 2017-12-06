const db = require('../models/database');
const userController = {};

userController.getAllUsers = (next) => {

  db.any('select * from "User"')
    .then(data => {
        console.log('DATA:', data); // print data;
    })
    .catch(error => {
        console.log('ERROR:', error); // print the error;
    });
    //.finally(db.$pool.end); // For immediate app exit, shutting down the connection pool



  // console.log(pool.connect);
  // const query = 'SELECT * FROM User ORDER BY id ASC;';
  // db.connect(function (err, client, done) {
  //   if (err) {
  //     return console.error('error fetching client from pool', err);
  //   }
  //   client.query(query, function (err, results) {
  //     console.log('inside client.query');
  //     var json = JSON.stringify(res.rows);
  //     res.json(json);
  //     client.release();
  //   });
  // });


  // pool.connect()
  // .then(client => {
  //   return client.query(query, [1])
  //     .then(res => {
  //       client.release()
  //       console.log(res.rows[0])
  //     })
  //     .catch(e => {
  //       client.release()
  //       console.log(err.stack)
  //     })
  // })


  // return new Promise((resolve, reject) => {
  //   const results = [];
  //
  //   if(err) {
  //     done();
  //     console.log(err);
  //     return res.status(500).json({success: false, data: err});
  //   }
  //   // SQL Query > Select Data
  //
  //   // Stream results back one row at a time
  //   pool.query(query, (err, res) => {
  //     console.log('err ---> ', err, '\n', 'res ---> ', res);
  //     if (err) {
	// 			reject(console.log(err));
	// 		} else {
  //       console.log(results);
	// 			resolve(results);
  //       next();
	// 		}
  //   });


    // .on('row', (row) => {
    //   results.push(row);
    // });
    // .on('end', () => {  // After all data is returned, close connection and return results
    //   // done();
    //   console.log(results);
    //   resolve(res.json(results));
    // });
  // });
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
