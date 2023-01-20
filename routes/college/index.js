var router = require("express").Router();
var College = require("../../controllers/college");

router.post("/create_college", College.createCollege);
router.get("/get_colleges", College.getColleges);
router.delete("/delete_college/:_id", College.deleteCollege);

module.exports = router;