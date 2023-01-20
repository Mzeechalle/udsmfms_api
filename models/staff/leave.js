//schema for staff leaves
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var StaffProfile = require("../../data/staff");

var leaveSchema = new Schema({
    creator:{
        type: Schema.Types.ObjectId,
        ref: "Users",
        required: true,
        autopopulate: true 
    },

    message: {
        type: String
    },

    start_date: {
        type: String,
        required: true
    },

    end_date: {
        type: String,
        required: true
    },

    days_requested: {
        type: Number,
        required: true
    },
    
    response: {
        type: String,
        default: "submitted"
    },

    hod: {
        type: String,
        default: "pending"
    },

    hod_date: {
        type: String,
    },

    hod_time:{
        type: String
    },

    hod_signature: {
        type: String
    },

    hod_reason: {
        type: String,
        default: "N/A"
    },

    principal: {
        type: String,
        default: "pending"
    },

    principal_date: {
        type: String
    },

    principal_time:{
        type: String
    },

    principal_signature: {
        type: String
    },

    principal_reason: {
        type: String,
        default: "N/A"
    },

    dvc: {
        type: String,
        default: "pending"
    },
    dvc_date: {
        type: String
    },

    dvc_time:{
        type: String
    },

    dvc_signature: {
        type: String
    },

    dvc_reason: {
        type: String,
        default: "N/A"
    },

    submitted: {
        type: Boolean,
        default: false
    },
    
}, { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } });

//set submitted to true on pre save a leave request document
leaveSchema.pre("save", async function (next){
    this.submitted = true;
    await updateStaffLeaveDaysBalance(this.creator, this.days_requested);
    return next();
});

//add leave days cancelled when a leave is deleted before being approved
leaveSchema.pre("remove", { query: true }, async function (next){
    //console.log(this);
    await getLeaveBalanceBack(this.creator, this.days_requested);
    return next();
});

//function to update leave days balance
const updateStaffLeaveDaysBalance = async (creator, days_requested) => {
    let staffProfile = await StaffProfile.findOne({ staff: creator });
    await StaffProfile.findOneAndUpdate(
        {
            staff: creator
        },
        { $set: { days_taken: staffProfile.days_taken + days_requested, days_left: staffProfile.days_left - days_requested } },
        { new: true }
    );
};

const getLeaveBalanceBack = async (creator, days_requested) => {
    let staffProfile = await StaffProfile.findOne({ staff: creator });
    await StaffProfile.findOneAndUpdate(
        {
            staff: creator
        },
        { $set: { days_taken: staffProfile.days_taken - days_requested, days_left: staffProfile.days_left + days_requested } },
        { new: true }
    );
};

leaveSchema.plugin(require('mongoose-autopopulate'));

module.exports = leaveSchema;