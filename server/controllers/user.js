const pg = require('pg'),
    db = require('../db'),
    bcrypt = require('bcrypt-nodejs');

module.exports = {
    getUsers: function(req, res, next) {
    db.any('select * from "User"')
    .then(function(data) {
        res.status(200)
        .json({
            status: 'success',
            data: data,
            message: "retrived all users"
        });
    })
    .catch(function(err) {
        return next(err);
    });
}
}