//handling HTTP requests
var Position = require("../../data/position");
var User = require("../../data/user");

exports.create_position = (req, res) => {

    //creating an object position
    var position = {
        pos_id: req.body.pos_id,
        pos_name: req.body.pos_name,
    };

    //executing query to create a position by inserting an object position
    Position.create(position, (error) => {
        try{
            if(error){
                res.status(400).json({
                    error: true,
                    message: "Request Failed"
                });
            }else{
                res.status(200).json({
                    error: false,
                    message: "Position created!"
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

//function to get all positions
exports.get_positions = (req, res) => {

    //executing query to read positions from the db
    Position.get({}, (error, positions) => {
        try{
            if(error){
                res.status(400).json({
                    error: error,
                    message: "Request failed!"
                });
            }else{
                res.status(200).json({
                    positions: positions
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

//function to update a position
exports.update_position = (req, res) => {
    
    //creating an object position
    var position = {
        pos_id: req.body.pos_id,
        pos_name: req.body.pos_name,
    };

    //executing query to update a position
    Position.update_position(
        {
            _id: req.params._id
        },
        position,
        (error, position) => {
            try{
                if(error){
                    res.status(400).json({
                        error: error,
                        message: "Request failed!"
                    });
                }else{
                    res.status(200).json({
                        message: "Position updated",
                        position: position
                    });
                }
            }catch(error){
                res.status(500).json({
                    error: error,
                    message: "Server Problems, Try again later!"
                });
            }
        }
    );
};

//function to delete a position
exports.delete_position = (req, res) => {

    //executing query to delete a position
    Position.delete_position(
        {
            _id: req.params._id
        },
        (error, position) => {
            try{
                if(error){
                    res.status(400).json({
                        error: true,
                        message: "Request failed!"
                    });
                }else{
                    User.delete_users({position: position._id}, async (error, users) => {
                        if(error){
                            res.status(401).json({
                                error: true,
                                message: "Request failed!"
                            });
                        }else{
                            await res.status(200).json({
                                error: false,
                                no_users_deleted: users.deletedCount,
                                message: "Position deleted!"
                            });
                        }
                    });
                }
            }catch(error){
                res.status(500).json({
                    error: error,
                    message: "Server Problems, Try again later!"
                });
            }
        }
    );
};