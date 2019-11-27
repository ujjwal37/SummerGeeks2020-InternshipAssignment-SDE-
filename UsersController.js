// usersController.js
// Import contact model
Users = require('./usersModel');
var path = require('path');

// Handle create user actions
exports.new = function (req, res) {
    var user = new Users();
    user.name = req.body.name;
    user.email = req.body.email;
    user.phonenumber= req.body.phonenumber;
// save the user and check for errors
    user.save(function (err) {
        // Check for validation error
        if (err)
            res.json(err);
        else
            return res.redirect('/Visitor');
    });
};
