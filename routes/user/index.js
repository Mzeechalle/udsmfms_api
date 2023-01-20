var router = require("express").Router();
var User = require("../../controllers/user");
var { checkUser } = require("../../middlewares/validation");
var { verifyToken } = require("../../middlewares/permissions");

//defining routes and exports them
router.post("/register", checkUser, User.create_user);
router.get("/get_users", User.get_users);
router.delete("/delete_user/:_id", User.delete_one_user);
router.get("/get_login_user_details", verifyToken, User.getUserLoggedIn);
router.get("/get_online_users", User.getOnlineUsers);
router.post("/login", User.login);
router.put("/logout", User.logout);
router.get("/count_users/:pos_name", User.countUsers);
router.get("/get_staff_users/:pos_name", User.getStaffUsers);

/*
module.exports = (router) => {
    router.post("/create_user", User.create_user);
    router.get("/get_users", User.get_users);

}*/

module.exports = router;
