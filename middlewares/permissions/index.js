//authentication for access
const jwt = require("jsonwebtoken");
const { decrypt } = require("../../helpers/hashing");
const { ROLE, POSITION } = require("../../helpers/store");
const LeaveRequest = require("../../data/staff/leave");
const StaffProfile = require("../../data/staff/index");
const User = require("../../data/user");
const { getNumberOfDaysBtnDates } = require("../../helpers/dates");

//function to verify if a user has a token
exports.verifyToken = (req, res, next) => {
    const accessToken = req.headers.authorization;

    if (!accessToken) {
      return res.status(401).json({
          error: true,
          message: "Unauthorized. Please login!"
      });
    }

    const token = accessToken.split(" ")[1];

    jwt.verify(decrypt(JSON.parse(token)), process.env.SECRET, (error, payload) => {
      if(error){
        return res.status(403).json({
          error: true,
          message: "Invalid Token"
        });
      }

      req.user = payload;

      next();
    });
};

//function to view a staff's profile
exports.scopedProfile = (user, profiles) => {
  if((user.user_role === ROLE.ADMIN || user.user_role === ROLE.SUPERADMIN)){
    return profiles;
  }

  //return user.user_id;
  //return profiles[1].staff._id;
  return profiles.filter(profile => profile.staff._id == user.user_id);
};
//function to view leave requests based on the user who has logggedin
exports.scopedLeaveRequests = (user, leaveRequests) => {
  if((user.user_role === ROLE.ADMIN || user.user_role === ROLE.SUPERADMIN)){
    return leaveRequests;
  }

  //return the leaveRequests that are for a specific user who is not an admin/superadmin
  return leaveRequests.filter(leaveRequest => leaveRequest.creator._id == user.user_id);

};

//function to check if a user can delete a leave Request
exports.canDeleteLeaveRequest = async (req, res, next) => {

  const leave = await LeaveRequest.findOne({ _id: req.params._id });
  if(leave.creator._id != req.user.user_id || leave.hod != "pending" || leave.principal != "pending" || leave.dvc != "pending"){
    return res.status(401).json({
      error: true,
      message: "You aren't Authorized to perform this action!"
    });
  }

  next();

};

//function to check if a user can edit a leave request
exports.canEditLeaveRequest = async (req, res, next) => {
  
  const leave = await LeaveRequest.findOne({ _id: req.params._id });
  if(leave.creator._id != req.user.user_id || leave.hod != "pending" || leave.principal != "pending" || leave.dvc != "pending"){
    return res.status(401).json({
      error: true,
      message: "You aren't authorized to perform this action!"
    });
  }

  next();

};

//function to check if a staff can apply for leave (based on the leave balance)
exports.checkBalance = async (req, res, next) => {

  const creator = await User.findOne({ _id: req.user.user_id });

  const profile = await StaffProfile.findOne({ staff: creator });

  if(getNumberOfDaysBtnDates(new Date(req.body.start_date), new Date(req.body.end_date)) >profile.days_left){
    return res.status(401).json({
      error: true,
      message: "You do not have enough leave balance!"
    });
  }

  next();

};