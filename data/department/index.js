//data object layer handler for the statics method of department Schema
var mongoose = require('mongoose');
var departmentSchema = require("../../models/department");

departmentSchema.statics = {

    //function to create a department
    create: function (data, cb){
        var department = new this(data);
        department.save(cb);
    },

    //function to get all the departments
    get: function (query, cb){
        this.find(query, cb).sort({ created_at: -1 })
        .populate({ path: "college" })
        .populate({ path: "dept_hod" })
        .populate({ path: "dept_secretary" });
    },

    //function to update a department
    update_department: function (query, updateData, cb){
        this.findOneAndUpdate(query, { $set: updateData }, { new: true }, cb);
    },

    //function to delete a department
    delete_department: function(query, cb){
        this.findOneAndDelete(query, cb);
    }
};

var departmentModel = mongoose.model("Departments", departmentSchema);

module.exports = departmentModel;