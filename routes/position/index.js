//handling routes for positions manipulation
var router = require("express").Router();
var Position = require("../../controllers/position");

//defining routes and export them
router.post("/create_position", Position.create_position);
router.get("/get_positions", Position.get_positions);
router.put("/update_position/:_id", Position.update_position);
router.delete("/delete_position/:_id", Position.delete_position);

/*
module.exports = router => {
    router.post("/create_position", Position.create_position);
    router.get("/get_positions", Position.get_positions);
    router.put("/update_position/:_id", Position.update_position);
    router.delete("/delete_position/:_id", Position.delete_position);
}
*/
module.exports = router;
