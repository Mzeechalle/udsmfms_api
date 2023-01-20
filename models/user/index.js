//users schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    first_name:{
        type: String,
    },

    middle_name: {
        type: String,
    },

    last_name:{
        type: String
    },

    email: {
        type: String
    },

    password: {
        type: Object,
    },

    role: {
        type: Schema.Types.ObjectId,
        ref: "Roles",
        default: "621fbc55487812fcd6fa6469",
        autopopulate: { maxDepth: 1 }
    },

    position: {
        type: Schema.Types.ObjectId,
        ref: "Positions",
        required: true,
        autopopulate: { maxDepth: 1 }
    },

    accessToken: {
        type: Object
    },

    isLoggedin: {
        type: Boolean,
        default: false
    },

    hasProfile: {
        type: Boolean,
        default: false
    },
    
}, { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } });

userSchema.plugin(require("mongoose-autopopulate"));
module.exports = userSchema;