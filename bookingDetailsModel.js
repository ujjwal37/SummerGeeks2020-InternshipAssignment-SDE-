// bookingDetail.js
var mongoose = require('mongoose');
var timestamp = require('mongoose-timestamp');
// Setup schema
var bookingDetailSchema = mongoose.Schema({
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
bookingDetailSchema.plugin(timestamp);
// Export bookingDetails model
var bookingDetails = module.exports = mongoose.model('bookingDetails', bookingDetailSchema);
module.exports.get = function (callback, limit) {
    Contact.find(callback).limit(limit);
}