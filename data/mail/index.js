require('dotenv').config();

var emailNotification = require("../../templates/notification");
//importing the module nodemailer
var nodemailer = require('nodemailer');

//importing smtp
var smtpTransport = require('nodemailer-smtp-transport');

var sendingEmail = {};

//method to send an email
sendingEmail = {
    sendEmail: async function(recipient, subject, leaveReason, hodResponse = "---", principalResponse = "---", dvcResponse = "---", hodDate = "---", principalDate = "---", dvcDate = "---", hodTime = "---", principalTime = "---", dvcTime = "---", leaveDays, cb){
        var transporter = nodemailer.createTransport(smtpTransport({
            host: process.env.SMTP_SERVER,
            port: process.env.SMTP_PORT,
            secure: false,
            auth: {
                user: `${process.env.SMTP_USERNAME}`,
                pass: `${process.env.SMTP_PASSWORD}`
            },
            tls: {
                rejectUnauthorized: false
            }
        }));

        var mailOptions = {
            from: `"UDSM - FMS" <${process.env.SMTP_USERNAME}>`,
            to: recipient,
            subject: subject,
            html: `${emailNotification.showEmail(leaveReason,hodResponse, principalResponse, dvcResponse, hodDate, principalDate, dvcDate,hodTime, principalTime, dvcTime, leaveDays)}`
        };

        await transporter.sendMail(mailOptions, (error, info) => {
            if(error){
                console.log(error);
            }else{
                // console.log("Success: Email received from : ", recipient);
                // console.log(info.response);
                cb();
            }
        });
    }
}

module.exports = sendingEmail;