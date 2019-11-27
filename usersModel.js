// UsersModel.js
var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
// Setup schema
var userSchema = mongoose.Schema({


    name: {
        type: String,
        required: true
    },
   
    email: {
        type: String,
        required: true
    },
  
    phonenumber:{
        type: String,
        required: true
    },
});

userSchema.plugin(timestamps);
// Export Users model
var users = module.exports = mongoose.model('users', userSchema);
module.exports.get = function (callback, limit) {
    Contact.find(callback).limit(limit);
}