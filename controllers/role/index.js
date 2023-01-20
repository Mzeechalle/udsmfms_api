//controller to handle HTTP requests for manipulating roles
var Role = require("../../data/role");
var User = require("../../data/user");

//function to create a role
exports.create_role = (req, res, next) => {

    //creating an object role
    var role = {
        role_id: parseInt(req.body.role_id),
        role_name: req.body.role_name
    };

    //executing a query to create a role by inserting an object role
    Role.create(role, (error) => {
        try{
            if(error){
                res.status(400).json({
                    error: true,
                    message: "Request failed"
                });
            }else{
                res.status(200).json({
                    error: false,
                    message: "Role created",
                    role: role
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

//function to get all roles
exports.get_roles = (req, res) => {

    Role.get({}, (error, roles) => {
        try{
            if(error){
                res.status(500).json({
                    message: "Request failed!"
                });
            }else{
                res.status(200).json({
                    roles: roles
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

//function to update a role
exports.update_role = (req, res) => {
    
    //creating an object role
    var role = {
        role_id: parseInt(req.body.role_id),
        role_name: req.body.role_name,
    };

    Role.update_role(
        {
            _id: req.params._id
        },
        role,
        (error, role) => {
            try{
                if(error){
                    res.status(400).json({
                        error: true,
                        message: "Request failed!"
                    });
                }else{
                    res.status(200).json({
                        error: false,
                        message: "Role updated",
                        role: role
                    });
                }
            }catch(error){
                res.status(500).json({
                    error: true,
                    message: "Server Problems, Try again later!"
                });
            }
        }
    );
};

//function to delete a role
exports.delete_role = (req, res) => {

    //executing query to delete a role
     Role.delete_role(
        {
            _id: req.params._id
        },
        (error, role) => {
            try{
                if(error){
                    res.status(400).json({
                        error: true,
                        message: "Request failed!"
                    });
                }else{
                     User.delete_users({ role: role._id }, async (error, users) => {
                        if(error){
                            res.status(401).json({
                                error: true,
                                message: "Request failed!"
                            });
                        }else{
                            await res.status(200).json({
                                error: false,
                                no_users_deleted: users.deletedCount,
                                message: "Role deleted!"
                            });
                        }
                    });
                }
            }catch(error){
                res.status(500).json({
                    error: true,
                    message: "Server Problems, Try again later!"
                });
            }
        }
    );
};