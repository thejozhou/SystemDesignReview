// let pool = new pg.Pool(uri, {
//     host: 'localhost',
//     database: 'SystemDesignReview'
// });
//
// pool.connect(uri, (err, client) => {
//   if (err) throw new Error(err);
//   db.conn = db_;
// });
//
// pool.connect(uri, (err, client, done) => {
//         if (err) {
//             //likely a connection error that will print to console.
//             done();
//             throw err;
//         }
//         client.query(query, (err, results) => {
//             done(); //call done to release the client to the connection pool.
//             callback(err, results); //make it the callers responsiblity for checking for query errors.
//         });
// });


// const { Pool, Client } = require('pg')
// const connectionString = 'postgres://tlmtjufp:Lhm6WiWmFuAQlDOfYXido1cyO9HFhO0K@baasu.db.elephantsql.com:5432/tlmtjufp'
//
// const pool = new Pool({
//   connectionString: connectionString,
// })
//
// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   pool.end()
// })
//
// const client = new Client({
//   connectionString: connectionString,
// })
// client.connect()
//
// client.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   client.end()
// })



// const client = new Client({
//   connectionString: connectionString,
// })
// client.connect()
//
// client.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   client.end()
// })

const promise = require('bluebird'); // or any other Promise/A+ compatible library;
const initOptions = {
  promiseLib : promise // use Bluebird instead of ES6 Promises
};
const pgp = require('pg-promise')(initOptions);
const connectionString = 'postgres://tlmtjufp:Lhm6WiWmFuAQlDOfYXido1cyO9HFhO0K@baasu.db.elephantsql.com:5432/tlmtjufp';
const db = pgp(connectionString);

module.exports = db;
