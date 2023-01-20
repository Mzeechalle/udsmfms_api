//handling routes for departments manipulation
var router = require("express").Router();
var Department = require("../../controllers/department");

//defining routes and export them
router.post("/create_department", Department.create_department);
router.get("/get_departments", Department.get_departments);
router.put("/update_department/:_id", Department.update_department);
router.delete("/delete_department/:_id", Department.delete_department);

module.exports = router;