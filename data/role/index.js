//data object layer for roles
var mongoose = require("mongoose");
var rolesSchema = require("../../models/role");

//defining functions that exists directly to the model (static functions)
rolesSchema.statics = {

    //creating a role
    create: function(data, cb){
        var role = new this(data);
        role.save(cb);
    },

    //getting all roles
    get: function(query, cb){
         this.find(query, cb).sort({ role_id : 1 });
    },

    //updating a role
    update_role: function(query, updateData, cb){
        this.findOneAndUpdate(query, {$set : updateData}, {new : true}, cb);
    },

    //deleting a role
    delete_role: function(query, cb){
        this.findOneAndDelete(query, cb);
    }
};

var roleModel = mongoose.model("Roles", rolesSchema);

module.exports = roleModel;
 /**
  * @todo
  * - creating auto-increment role_id
  */