//a schema to define positions
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var positionSchema = new Schema({
    pos_id: {
        type: Number,
        unique: true,
        default: 1
    },

    pos_name: {
        type: String,
        required: true,
        unique: true
    }
}, { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } });

module.exports = positionSchema;