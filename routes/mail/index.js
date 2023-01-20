const router = require('express').Router();
const Mail = require("../../controllers/mail");


router.post("/send_email", Mail.sendAnEmail);

module.exports = router;