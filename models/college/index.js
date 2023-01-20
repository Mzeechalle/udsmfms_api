var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var collegeSchema = new Schema({
    college_name: {
        type: String,
        required: true,
        unique: true
    },

    college_abbrv: {
        type: String,
        required: true,
        unique: true
    },

}, { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } });

module.exports = collegeSchema;