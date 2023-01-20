//handling and creating api routes
var router = require('express').Router();
var Role = require("../../controllers/role");

router.post("/register_role", Role.create_role);
router.get("/get_roles", Role.get_roles);
router.put("/update_role/:_id", Role.update_role);
router.delete("/delete_role/:_id", Role.delete_role);

//defining the routes and export them
/*
module.exports = (router) => {
    router.post("/create_role", Role.create_role);
    router.get("/get_roles", Role.get_roles);
    router.put("/update_role/:_id", Role.update_role);
    router.delete("/delete_role/:_id", Role.delete_role);
};*/

module.exports = router;