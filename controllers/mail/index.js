//nodemailer controller

//getting the dao file
var Nodemailer = require('../../data/mail');

//method to send an email
exports.sendAnEmail = async (req, res, next) => {
    var recipient = req.body.recipient;
    var subject = req.body.subject;
    var message = req.body.message;

    //sending the email

   await Nodemailer.sendEmail(recipient, subject, message,(error) => {
        try{
            if(error){
                res.status(400).json({
                    error: true,
                    message: "Request failed!"
                });
            }else{
                res.status(200).json({
                    error: false,
                    message: "Email sent!"
                });
            }
        }catch(error){
            res.status(500).json({
                error: error,
                message: "Server Problems, Try again later!"
            });
        }
    });
};

//funciton to send emails notification (on staff leave approve/reject)
exports.sendEmailNotification = async (req, res) => {

    const attribute = req.body.attribute.toLowerCase();
    const newStatus = req.body.status;
    const attribute_reason = attribute + "_reason";
    const reason  = req.body.reason;
    const attribute_date = attribute + "_date";
    const subject = "Leave Application Status";
    const message = `Head of Department: ${req.leave.hod.toUpperCase()}\n College Principal: ${req.leave.principal.toUpperCase()}\n DVC - Academic: ${req.leave.dvc.toUpperCase()}`
    //req.body.staff_email

    // return res.status(200).json({
    //     error: false,
    //     message: "Success",
    //     leave: req.leave
    // });
    //req.body.staff_email
    
    //sending the email
    await Nodemailer.sendEmail(
        "kelvinkedysonzacharia@gmail.com", 
        subject, 
        req.leave.message,
        req.leave.hod.toUpperCase(), 
        req.leave.principal.toUpperCase(), 
        req.leave.dvc.toUpperCase(),
        req.leave.hod_date,
        req.leave.principal_date,
        req.leave.dvc_date,
        req.leave.hod_time,
        req.leave.principal_time,
        req.leave.dvc_time,
        req.leave.days_requested,
        (error) => {
        try{
            if(error){
                return res.status(400).json({
                    error: true,
                    err: error,
                    message: "Request failed!"
                });
            }else{
                return res.status(200).json({
                    error: false,
                    message: "Success"
                });
            }
        }catch(error){
            return res.status(500).json({
                error: true,
                err: error,
                message: "Server Problems, Try again later!"
            });
        }
    });
};