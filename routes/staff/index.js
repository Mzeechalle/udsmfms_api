//handling all routes for staff 
var router = require('express').Router();
var Staff = require("../../controllers/staff");
const Email = require("../../controllers/mail");
var { verifyToken, canDeleteLeaveRequest, checkBalance } = require("../../middlewares/permissions");

router.post("/create_profile", Staff.createProfile);
router.get("/profile", verifyToken, Staff.getStaffProfile);
router.post("/create_staff_leave", verifyToken, checkBalance, Staff.createLeaveRequest);
router.get("/get_staff_leaves", verifyToken, Staff.getLeaveRequests);
router.get("/count_staff_leaves", verifyToken, Staff.getLeavesCount);
router.get("/get_staff_leave_by_id/:_id", Staff.getStaffLeaveById);
router.delete("/delete_staff_leave/:_id", verifyToken, canDeleteLeaveRequest, Staff.deleteLeaveRequest);
router.put("/update_staff_leave_progress/:_id", Staff.updateStaffLeaveProgress, Email.sendEmailNotification);
router.get("/get_submitted_staff_leaves", Staff.getHoDAssignedStaffLeaves);
router.get("/get_staff_leave_with_profile/:_id", Staff.getStaffLeaveWithProfileData);
router.get("/get_staff_leave_balance/:_id", Staff.getStaffLeaveBalance);
router.get("/get_approved_staff_leaves/:person", Staff.getApprovedLeaves);
router.get("/get_recent_staff_leaves", verifyToken, Staff.getRecentStaffLeaveRequests);

module.exports = router;
//Staff.createLeaveRequest