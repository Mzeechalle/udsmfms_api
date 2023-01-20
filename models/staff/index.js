//staff profile schema
var mongoose = require('mongoose');
var User = require("../../data/user");
var Schema = mongoose.Schema;

var staffProfileSchema = new Schema({
    staff: {
        type: Schema.Types.ObjectId,
        ref: "Users",
        required: true,
        unique: true,
        autopopulate: true
    },

    college: {
        type: Schema.Types.ObjectId,
        ref: "Colleges",
        autopopulate: true
    },

    department: {
        type: Schema.Types.ObjectId,
        ref: "Departments",
        required: true,
        autopopulate: true
    },

    cadre: {
        type: String
    },

    subVote: {
        type: String
    },

    marital_status:{
        type: String,
        default: "Single"
    },

    dob: {
        type: String,
        required: true
    },

    phone: {
        type: String,
        unique: true,
    },

    age: {
        type: Number,
    },

    dof: {
        type: String,
        required: true
    },

    photo: {
        type: String,
        default: "https://res.cloudinary.com/coictfms/image/upload/v1650433463/defaultuserimage_h6nnrt.png"
    },

    address: {
        type: String
    },

    bank_name: {
        type: String,
        required: true
    },

    account_number: {
        type: String,
        required: true,
        unique: true
    },

    spouse:{
        type: String,
        default: "-"
    },

    family_members: {
        type: Array
    },

    signature: {
        type: String,
        unique: true
    },

    default_days: {
        type: Number,
        default: 28
    },

    days_left: {
        type: Number,
        default: 28
    },

    days_taken: {
        type: Number,
        default: 0
    },

}, { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } });

staffProfileSchema.pre("save", async function (next){
    await User.findOneAndUpdate(
        {
            _id: this.staff._id
        },
        { $set: { hasProfile: true} },
        { new: true }
    );
    return next();
});
staffProfileSchema.plugin(require('mongoose-autopopulate'));

module.exports = staffProfileSchema;

//todo
//to create a functionality that keep records of payment history