var mongoose = require('mongoose');
var collegeSchema = require("../../models/college");

//defining static methods that exists directly to the db
collegeSchema.statics = {

    //function to create a new college
    create: function(data, cb){
        var college = new this(data);
        college.save(cb);
    },

    //function to get all college(s)
    get: function(query, cb){
        this.find(query, cb).sort({ created_at: -1 });
    },

    //function to delete a single college
    delete_college: function(query, cb){
        this.findOneAndDelete(query, cb);
    }
};

var collegeModel = mongoose.model("Colleges", collegeSchema);

module.exports = collegeModel;