//data object layer for users
var mongoose = require("mongoose");
var jwt = require('jsonwebtoken');
var usersSchema = require("../../models/user");

//defining functions that exists directly to the model (static functions)
usersSchema.statics = {

    //creating a user
    create: function(data, cb){
        var user = new this(data);
        user.save(cb);
    },

    //getting all users
    get: function(query, cb){
         this.find(query, cb).sort({ created_at : -1 });
    },

    //deleting a single user
    delete_user: function(query, cb){
        this.findOneAndDelete(query, cb);
    },

    //deleting many users
    delete_users: function(query, cb){
        this.deleteMany(query, cb);
    },

    //function to update a single user
    update_user: function(query, data, cb){
        this.findOneAndUpdate(query, data, { new: true }, cb);
    },

    //function to find one user
    find_user: function(query, cb){
        this.findOne(query, cb);
    },

    //function to count number of users based on a given query
    count_users: function(query, cb){
        this.find(query, cb).count();
    },

    //function to generate an access token
    generateAccessToken: function(user){
        return jwt.sign(user, process.env.SECRET);
    },

    //deleting a token
    deleteToken: function(query, cb){

    },

    //finding a user by token
    findByToken: function(token, cb){
        jwt.verify(token, process.env.SECRET, (error, user) => {

            this.findOne({ user_id: user, token: token }, (error, user) => {
                if(error) return cb(error);
                cb(null, user);
            });
        });
    }

};

var userModel = mongoose.model("Users", usersSchema);

module.exports = userModel;