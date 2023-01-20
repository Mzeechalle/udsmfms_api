//controller to handle HTTP requests for manipulating users
var jwt = require('jsonwebtoken');
var User = require("../../data/user");
var Role = require("../../data/role");
var Position = require("../../data/position");
const { encrypt, decrypt } = require("../../helpers/hashing");


//function to create a user
exports.create_user = async (req, res, next) => {
    
    //creating an object user
    var user = {
        first_name: req.body.first_name,
        middle_name: req.body.middle_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: encrypt(req.body.password),
        role: req.body.role,
        position: req.body.position
    };

    //executing query to create a user by inserting an object user
    User.create(user, (error) => {
        try{
            if(error){
                res.status(400).json({
                    error: true,
                    message: "Request failed!"
                });
            }else{
                res.status(201).json({
                    error: false,
                    message: "User created!",
                    user: user,
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

//function to get all users from the db
exports.get_users = (req, res) => {

    User.get({}, (error, users) => {
        if(error){
            res.status(400).json({
                error: true,
                message: "failed"
            });
        }else{
            res.status(200).json({
                error: false,
                users: users
            });
        }
    });
};

//function to delete a single user
exports.delete_one_user = (req, res) => {

    //executing query to delete a user in the db
    User.delete_user(
        {
            _id: req.params._id
        },
        (error, user) => {
            try{
                if(error){
                    res.status(400).json({
                        error: true,
                        message: "Request failed!"
                    });
                }else{
                    res.status(200).json({
                        error: false,
                        message: "User deleted!"
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

//function to get a user who has just loggedin
exports.getUserLoggedIn = (req, res) => {
    User.find_user({email: req.user.user_email}, (error, user) => {
        if(error){
            return res.status(400).json({
                error: true,
                message: "Request Failed!"
            });
        }

        return res.status(200).json({
            error: false,
            user: user
        });
    });
};

//function to get online users
exports.getOnlineUsers = async (req, res) => {
    const onlineUsers = await User.get({isLoggedin: true}, (error, onlineUsers) => {
        if(error){
            res.status(400).json({
                message: "Request Failed!"
            });
        }else{
            res.status(200).json({
                onlineUsers
            });
        }
    });
}

//function to login a user
exports.login = async (req, res) => {

    const isUser = await User.findOne({email: req.body.email});

    if(!isUser || decrypt(isUser.password) !== req.body.password){
        return res.status(401).json({
            error: true,
            message: "Wrong username or password!"
        });
    }

    //checking if a user has a token already
    if(!isUser.isLoggedin){

        const role = await Role.findOne({_id: isUser.role._id});
        const position = await Position.findOne({_id: isUser.position});
        const user_fullname = `${isUser.last_name}, ${isUser.first_name} ${isUser.middle_name}`;

        const accessToken = await User.generateAccessToken({
            user_id: isUser._id,
            user_fullname: user_fullname,
            user_email: isUser.email, 
            user_role: role.role_name,
            user_position: position.pos_name
        });

        req.token = encrypt(accessToken);

        await User.update_user(
            {
                _id: isUser._id
            },
            { $set: { accessToken: req.token , isLoggedin: true} },
            (error, user) => {
                if(error){
                    res.status(400).json({
                        error: true,
                        message: "Request Failed!"
                    });
                }

                res.set("authorization", req.token).json({
                    error: false,
                    isLoggedin: true,
                    user_id: isUser._id,
                    user_position: position.pos_name,
                    user_role: role.role_name,
                    user_fullname: user_fullname,
                    user_email: isUser.email,
                    has_profile: isUser.hasProfile,
                    message: "Login success",
                    token: req.token,
                });
            }
        );
    }else{
        try{
            res.status(403).json({
                error: true,
                message: "You are already logged in!"
            });
        }catch(error){
            throw new Error(error.toString());
        }
    }

};

//function to logout a user
exports.logout = async (req, res) => {
    try{
        //return res.json({ message: res.get("access-token") });
        //finding the user with the email already logged in and unset the accessToken
        await User.update_user(
            {
                email: req.body.email
            },
            { $unset: { accessToken: 1 }, $set:{isLoggedin: false} },
            (error, user) => {
                if(error){
                    res.status(400).json({
                        error: true,
                        message: "Request Failed!"
                    });
                }

                res.status(200).json({
                    error: false,
                    isLoggedin: false,
                    message: "Logout success"
                });
            }
        );
    }catch(error){
        throw new Error(error.toString());
    }
};

//function to count users
exports.countUsers = async (req, res) => {

    const position = await Position.findOne({pos_name: req.params.pos_name});

    // return res.status(200).json({
    //     position
    // });

    //executing a query to count all users
    User.count_users({position: position._id}, (error, count) => {
        try{
            if(error){
                res.status(401).json({
                    error: true,
                    message: "Request failed!"
                });
            }else{
                res.status(200).json({
                    error: false,
                    message: "Total number of users",
                    users: count
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

//function to get users who are staff (position: staff) -- will be dynamic
exports.getStaffUsers = async (req, res) => {

    //getting the position
    const position = await Position.findOne({pos_name: req.params.pos_name});

    User.get({ position: position._id }, (error, users) => {
        try{
            if(error){
                res.status(400).json({
                    error: true,
                    message: "Request Failed!"
                });
            }else{
                res.status(200).json({
                    error: false,
                    message: "Success!",
                    users: users
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