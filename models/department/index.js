//departments
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var departmentSchema = new Schema({
    college: {
        type: Schema.Types.ObjectId,
        ref: "Colleges",
        required: true,
        autopopulate: { maxDepth: 1 }
    },
    dept_name: {
        type: String,
        required: true,
        unique: true
    },
    dept_abbrv: {
        type: String,
        required: true,
        unique: true
    },

    dept_hod: {
        type: Schema.Types.ObjectId,
        ref: "Users",
        required: true,
        unique: true,
        autopopulate: { maxDepth: 2 }
    },

    dept_secretary: {
        type: Schema.Types.ObjectId,
        ref: "Users",
        required: true,
        unique: true,
        autopopulate: { maxDepth: 2 }
    }

}, { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } });

departmentSchema.plugin(require('mongoose-autopopulate'));

module.exports = departmentSchema;