//data object layer for the staff profile
var mongoose = require('mongoose');
var staffProfileSchema = require("../../models/staff/index");

//defining statics functions that exists directly to the db
staffProfileSchema.statics = {

    //function to create a profile
    create: function(data, cb){
        var staffProfile = new this(data);
        staffProfile.save(cb);
    },

    //function to get the staff's profile
    get: function(query, cb){
        this.find(query, cb).sort({ created_at: -1 });
    },

    //updating a role
    update_profile: function(query, updateData, cb){
        this.findOneAndUpdate(query, {$set : updateData}, {new : true}, cb);
    },
};

var staffProfileModel = mongoose.model("StaffProfiles", staffProfileSchema);

module.exports = staffProfileModel;