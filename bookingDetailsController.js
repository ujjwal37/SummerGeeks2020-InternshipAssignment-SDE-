// bookingDetailsController.js

BookingDetails = require('./bookingDetailsModel');
var path = require('path');

// Handle create bookingDetails actions
exports.new = function (req, res) {
    
    var bookingDetail = new BookingDetails();
    bookingDetail.name = req.body.name;
    bookingDetail.email= req.body.email;
    bookingDetail.phonenumber= req.body.phonenumber;
    

// save the contact and check for errors
bookingDetail.save(function (err) {
        // Check for validation error
        if (err)
            res.json(err);
        else{
           return res.redirect('/confirm');
        }
    });
};