//data object layer for the staff leave request(s)
var mongoose = require('mongoose');
var leaveSchema = require("../../models/staff/leave");

//defining functions that exists directly to the model (static functions)
leaveSchema.statics = {

    //function to create a staff leave request
    create: function(data, cb){
        var leaveRequest = new this(data);
        leaveRequest.save(cb);
    },

    //function to get staff leave request(s)
    get: function(query, cb){
        this.find(query, cb).sort({ created_at: -1 });
    },

    //function to get only top three recent leaves
    get_recent_leaves: function(query, cb){
        this.find(query, cb).sort({ created_at: -1 });
    },

    //deleting a leave request
    delete_leave: function(query, cb){
        this.findOneAndDelete(query, cb);
    },

    //updating a staff leave
    update_leave(query, updateData, cb){
        this.findOneAndUpdate(query, { $set: updateData }, { new: true }, cb)
    }
};

var leaveRequestModel = mongoose.model("LeaveRequests", leaveSchema);

module.exports = leaveRequestModel;