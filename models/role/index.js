//model for role schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var roleSchema = new Schema({

    role_id: {
        type: Number,
        required: true,
        unique: true,
        default: 1
    },

    role_name: {
        type: String,
        required: true,
    }

}, { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } });

module.exports = roleSchema;