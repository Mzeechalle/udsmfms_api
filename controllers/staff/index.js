//handling HTTP requests for staff leaves
var LeaveRequest = require("../../data/staff/leave");
var StaffProfile = require("../../data/staff");
var Department  = require("../../data/department");
var College = require("../../data/college");
var User = require("../../data/user");
var { scopedProfile, scopedLeaveRequests } = require("../../middlewares/permissions");
var { showDate, calculateAge, getNumberOfDaysBtnDates, formatAMPM } = require("../../helpers/dates");
var { getStaffByEmail } = require("../../services/staff");

//function to create data for the staff's profile
exports.createProfile = (req, res) => {

    const creatingAStaffProfile = async () => {
        await getStaffByEmail(
            req.body.email,
            async (data) => {
                if(data.staff.length == 0){
                    return res.status(400).json({
                        error: true,
                        message: "No Staff found!"
                    });
                }

                const college = await College.findOne({college_abbrv: new RegExp(data.staff[0].college)});
                const dept = await Department.findOne({dept_abbrv: new RegExp(data.staff[0].department)});
                var staffProfile = {
                    staff: req.body.staff,
                    college: college._id,
                    department: dept._id,
                    marital_status: req.body.marital_status,
                    dob: showDate(new Date(data.staff[0].dateOfBirth)),
                    age: calculateAge(new Date(data.staff[0].dateOfBirth)),
                    dof: showDate(new Date(data.staff[0].dateOfFA)),
                    cadre: data.staff[0].cadre,
                    subVote: data.staff[0].subVote,
                    phone: req.body.phone,
                    address: req.body.address,
                    photo: req.body.image,
                    bank_name: req.body.bank_name,
                    account_number: req.body.account_number,
                    signature: req.body.signature,
                    spouse: req.body.spouse,
                    family_members: req.body.family_members
                };

                //executing a query to create a staff profile by inserting an object staffProfile
                await StaffProfile.create(staffProfile, (error, profile) => {
                    try{
                        if(error){
                            res.status(400).json({
                                error: true,
                                message: "Request failed!"
                            });
                        }else{
                            res.status(200).json({
                                error: false,
                                message: "Staff Profile created!",
                                profile: profile
                            });
                        }
                    }catch(error){
                        res.status(500).json({
                            error: true,
                            message: "Server Problems, Try again later!"
                        });
                    }
                });
            },
            (error) => {
                res.status(500).json({
                    error: true,
                    message: "Server Problems, Try again later!"
                });
            }
        );
    };

    creatingAStaffProfile();
};

//function to get profile of a user
exports.getStaffProfile = (req, res) => {

    //executing a query to fetch a staff's profile from the db
    StaffProfile.get({}, (error, profiles) => {
        try{
            if(error){
                res.status(400).json({
                    error: error,
                    message: "Request Failed!"
                });
            }else{
                res.status(200).json({
                    profile: scopedProfile(req.user, profiles)
                });
            }
        }catch(error){
            console.log(error);
            // res.status(500).json({
            //     error: true,
            //     message: "Server Problems, Please try again later!"
            // })
        }
    });
};

//function to update a staff's profile
exports.updateStaffProfile = (req, res) => {

    //creating an object profile
    var staffProfile = {
        staff: req.body.staff,
        department: req.body.department,
        marital_status: req.body.marital_status,
        dob: req.body.dob,
        dof: req.body.dof,
        phone: req.body.phone,
        address: req.body.address,
        photo: req.body.photo,
        bank_name: req.body.bank_name,
        account_number: req.body.account_number,
        signature: req.body.signature,
        spouse: req.body.spouse,
        days_left: req.body.days_left
    };

    //executing a query to update a staff profile
    StaffProfile.update_profile(
        {
            _id: req.params._id
        },
        staffProfile,
        (error, profile) => {
            try{
                if(error){
                    return res.status(400).json({
                        error: true,
                        message: "Request Failed!"
                    });
                }
                return res.status(200).json({
                    error: false,
                    message: "Profile Updated!",
                    profile: profile
                });
            }catch(error){
                res.status(500).json({
                    error: true,
                    message: "Server Problems, Please try again later!"
                });
            }
        }
    );
};

//function to create a leave request
exports.createLeaveRequest = async (req, res) => {

    //const phrase = "STFLV";
    //const ref = `${new Date(req.body.start_date).getDay()}${new Date(req.body.start_date).getMonth()}${new Date(req.body.start_date).getFullYear()}`;

    //creating an object leaveRequest
    var leaveRequest = {
        creator: req.body.creator,
        message: req.body.message,
        start_date: showDate(new Date(req.body.start_date)),
        end_date: showDate(new Date(req.body.end_date)),
        days_requested: getNumberOfDaysBtnDates(new Date(req.body.start_date), new Date(req.body.end_date))
    };

    //executing a query to create a leave request by inserting an object leaveRequest
    LeaveRequest.create(leaveRequest, (error) => {
        try{
            if(error){
                res.status(400).json({
                    error: true,
                    message: "Request Failed!"
                });
            }else{
                res.status(201).json({
                    error: false,
                    message: "Leave Request Created!",
                    leaveRequest: leaveRequest
                });
            }
        }catch(error){
            res.status(500).json({
                error: true,
                message: "Server Problems, Please try again later!"
            });
        }
    });
};

//function to get all leave requests of a particular staff_user from the db
exports.getLeaveRequests = (req, res) => {
    

    // res.status(200).json({user: req.user});
    //executing a query to get all leave requests from the db
    LeaveRequest.get({}, (error, leaveRequests) => {
        try{
            if(error){
                res.status(400).json({
                    error: error,
                    message: "Request Failed!"
                });
            }else{
                res.status(200).json({
                    leaverequests: scopedLeaveRequests(req.user, leaveRequests)
                });
            }
        }catch(error){
            res.status(500).json({
                error: true,
                message: "Server Problems, Please try again later"
            });
        }
    });
};

//function to update a leave request
exports.updateLeaveRequest = (req, res) => {};

//function to delete a leave request
exports.deleteLeaveRequest = (req, res) => {

    //executing a query to delete a leave request
    LeaveRequest.delete_leave(
        {
            _id: req.params._id
        },
        (error, leave) => {
            try{
                if(error){
                    res.status(400).json({
                        error: true,
                        message: "Request Failed!"
                    });
                }else{
                    res.status(200).json({
                        error: false,
                        message: "Leave request deleted!"
                    });
                }
            }catch(error){
                res.status(500).json({
                    error: true,
                    message: "Server Problems, Try again later!"
                });
            }
        }
    );
};

//function to count number of leaves per each user
exports.getLeavesCount = (req, res) => {

    //getting all the leaves of a particular user
    LeaveRequest.get({}, (error, leaverequests) => {
        try{
            let totalRequests = scopedLeaveRequests(req.user, leaverequests);
            let pendingRequests = totalRequests.filter(leaverequest => leaverequest.dvc == "pending");
            if(error){
                res.status(400).json({
                    error: error,
                    message: "Request Failed!"
                });
            }else{
                res.status(200).json({
                    total: totalRequests.length,
                    pending: pendingRequests.length
                });
            }
        }catch(error){
            res.status(500).json({
                error: true,
                message: "Server Problems, Try again later!"
            });
        }
    });
};

//function to update a staff leave request progress
exports.updateStaffLeaveProgress = (req, res, next) => {

    const attribute = req.body.attribute.toLowerCase();
    const newStatus = req.body.status;
    const attribute_reason = attribute + "_reason";
    const reason  = req.body.reason;
    const attribute_date = attribute + "_date";
    const attribute_time = attribute + "_time";
    // console.log(reason);
    // return;
    LeaveRequest.update_leave(
        {
            _id: req.params._id
        },
        { [attribute]: newStatus, [attribute_reason]: reason, [attribute_date]: showDate(new Date(Date.now())), [attribute_time]: formatAMPM(new Date(Date.now())) },
        (error, leave) => {
            try{
                if(error){
                    return res.status(400).json({
                        error: true,
                        message: "Request failed!"
                    });
                }else{
                    
                    req.leave = leave;

                    return next();

                }
            }catch(error){
                return res.status(500).json({
                    error: true,
                    message: "Server Problems, Try again later!"
                });
            }
        }
        
    );
};

//function to get a single staff leave request
exports.getStaffLeaveById = (req, res) => {

    //executing a query to get the staff leave
    LeaveRequest.get(
        {
            _id: req.params._id
        },
        (error, leave) => {
            try{
                if(error){
                    res.status(400).json({
                        error: true,
                        message: "Request failed!"
                    });
                }else{
                    res.status(200).json({
                        error: true,
                        message: "Staff leave Request",
                        leave: leave
                    });
                }
            }catch(error){
                res.status(500).json({
                    error: true,
                    message: "Server Problems, Try again later!"
                });
            }
        }
    );
};

//function to get leaves assigned to HoD
exports.getHoDAssignedStaffLeaves = (req, res) => {

    //executing a query to get the staff leaves with hod true
    LeaveRequest.get(
        {
            submitted: true
        },
        (error, leaves) => {
            try{
                if(error){
                    res.status(400).json({
                        error: true,
                        message:"Request failed!"
                    });
                }else{
                    res.status(200).json({
                        error: false,
                        message: "HoD Received Staff Leaves",
                        submitted: leaves
                    });
                }
            }catch(error){
                res.status(500).json({
                    error: true,
                    message: "Server Problems, Try again later!"
                });
            }
        }
    );
};

//function to get approved staff leaves
exports.getApprovedLeaves = (req, res) => {

    //executing a query to get the leaves with status approved(hod || principal || dvc)
    LeaveRequest.get(
        {
            [req.params.person]: "approved"
        },
        (error, leaves) => {
            try{
                if(error){
                    res.status(400).json({
                        error: true,
                        message:"Request failed!"
                    });
                }else{
                    res.status(200).json({
                        error: false,
                        message: `${req.params.person.toUpperCase()} approved Staff Leaves`,
                        submitted: leaves
                    });
                }
            }catch(error){
                res.status(500).json({
                    error: true,
                    message: "Server Problems, Try again later!"
                });
            }
        }
    );
};

//function to get top three added leaves of a specific staff
exports.getRecentStaffLeaveRequests  = (req, res) => {

    //executing a query to fetch from the db
    LeaveRequest.get_recent_leaves({}, (error, recentleaves) => {
        try{
            if(error){
                res.status(400).json({
                    error: true,
                    message: "Request failed!"
                });
            }else{
                res.status(200).json({
                    error: false,
                    message: "Recent added leaves!",
                    recentleaves: scopedLeaveRequests(req.user, recentleaves)
                });
            }
        }catch(error){
            res.status(500).json({
                error: true,
                message: "Server Problems, Try again later!"
            });
        }
    });
};

//function to get a staff leave, with its staff profile data
exports.getStaffLeaveWithProfileData = async (req, res) => {

    const leave_id = req.params._id;
    const leave = await LeaveRequest.findOne({_id: leave_id});
    const creator = await User.findOne({_id: leave.creator._id});
    const user_id = creator._id;
    const staffProfile = await StaffProfile.findOne({staff: creator });

    try{
        res.status(200).json({
            leave: { 
                created_at: leave.created_at,
                days_requested: leave.days_requested,
                start_date: leave.start_date,
                end_date: leave.end_date,
                reason: leave.message,
                status: leave.response,
                hod: {
                    response: leave.hod,
                    issue_date: leave.hod_date,
                    comment: leave.hod_comment,
                    signature: leave.hod_signature,
                    reason: leave.hod_reason
                },
                principal: {
                    response: leave.principal,
                    issue_date: leave.principal_date,
                    comment: leave.principal_comment,
                    signature: leave.principal_signature,
                    reason: leave.principal_reason
                },
                dvc: {
                    response: leave.dvc,
                    issue_date: leave.dvc_date,
                    comment: leave.dvc_comment,
                    signature: leave.dvc_signature,
                    reason: leave.dvc_reason
                }
                
            },
            staff: {
                full_name:`${creator.last_name}, ${creator.first_name} ${creator.middle_name}`,
                cadre: staffProfile.cadre,
                dof: staffProfile.dof,
                contacts: {
                    email: creator.email,
                    phone: staffProfile.phone,
                    address: staffProfile.address
                },
                family: {
                    marital_status: staffProfile.marital_status,
                    members: staffProfile.family_members,
                    spouse: staffProfile.spouse
                },
                department: {
                    name: staffProfile.department.dept_name,
                    abbrv: staffProfile.department.dept_abbrv,
                    hod: `${staffProfile.department.dept_hod.last_name}, ${staffProfile.department.dept_hod.first_name} ${staffProfile.department.dept_hod.middle_name}`,
                    secretary: `${staffProfile.department.dept_secretary.last_name}, ${staffProfile.department.dept_secretary.first_name} ${staffProfile.department.dept_secretary.middle_name}`
                },
                bank: {
                    name: staffProfile.bank_name,
                    account_number: staffProfile.account_number
                },
                photo: staffProfile.photo,
                leave_balance: {
                    days_taken: staffProfile.days_taken,
                    days_left: staffProfile.days_left,
                    default_days: staffProfile.default_days
                }
            }
        });
    }catch(error){
        //console.log(error);
        res.status(500).json({
            error: true,
            message: "Server Problems, Try again later!"
        });
    }
    
};

//function to return the leave balance of a staff
exports.getStaffLeaveBalance = async (req, res) => {

    try{
        //getting the user
        let user = await User.findOne({ _id: req.params._id });

        //getting the staff matching the user reference
        let staff = await StaffProfile.findOne({ staff: user });

        //returning the response
        res.status(200).json({
            days_left: staff.days_left,
            days_taken: staff.days_taken,
            default_days: staff.default_days
        });
    }catch(error){
        res.status(500).json({
            error: true,
            err: error,
            message: "Server Problems, Try again later!"
        });
    }
};

//todo
/**
await User.update_user(
    {
        _id: staffProfile.staff
    },
    { $set: { hasProfile: true} },
    (error, user) => {
        if(error){
            res.status(400).json({
                error: true,
                message: "Request Failed!"
            });
        }else{
            res.status(201).json({
                error: false,
                message:"Profile Created!"
            });
        }
    }
);

if(error){
    res.status(400).json({
        error: error,
        message: "Request failed!"
    });
}else{
    res.status(200).json({
        error: false,
        message: "Profile created!",
        profile: staffProfile
    });
}
 */



























/**
 //importing RegEx and patterns from helpers
const RegEx = require('../../helpers/regex');
const Pattern = require('../../helpers/pattern');
const date = require('../../helpers/dates');
const hashing = require('../../helpers/hashing/password');

//example code
console.log("isPhoneValid: ",RegEx.validate("0744345000", Pattern.pattern["phone"]));

//example code (MM-DD-YYYY)
console.log("Birthday: ",date.showDate("03-01-2014"));

//example code (MM-DD-YYYY)
console.log("Age: ",date.calculateAge("03-01-2014"));

console.log(hashing.hashPassword("Kelvin"));

//function to check validity of the password
console.log(hashing.isPasswordValid("Kedyson", "Kedyson"));
 */