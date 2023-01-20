const User = require("../../data/user");
const LeaveRequest = require("../../data/staff/leave");

//function to verify if a user exists in a database
exports.checkUser = async (req, res, next) => {

    const user = await User.findOne({email: req.body.email});
    try{
        if(user){
            return res.status(409).json({
                error: true,
                message: "User already exists!"
            });
            
        }
        
        next();

    }catch(error){
        res.status(500).json({
            error: true,
            message: "Server Problems, try again later!"
        });
    }

};

//function to update leave status from submitted to completed
exports.changeLeaveSubmission = async (req, res) => {

    //executing a query to get a single leave request based on the params._id
    const leave = await LeaveRequest.findOne({ _id: req.params._id });
    try{
        let status = "";
        if(leave.hod === "approved" && leave.principal === "approved" && leave.dvc === "approved"){
            //to be completed later..
            //the idea is to update the leave.submitted to a value that will be displayed to indicate that the process is completed
        }
    }catch(error){
        console.log(error);
    }
};

//function to verify a token
exports.verifyToken = (req, res, next) => {};