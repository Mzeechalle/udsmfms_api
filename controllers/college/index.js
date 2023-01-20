var College = require("../../data/college");

//function to create a college and insert into the db
exports.createCollege = (req, res) => {

    //creating an object college
    var college = {
        college_name: req.body.college_name,
        college_abbrv: req.body.college_abbrv
    };

    //executing a query to save an object college
    College.create(college, (error, college) => {
        try{
            if(error){
                res.status(400).json({
                    error: true,
                    message: "Request Failed!"
                });
            }else{
                res.status(200).json({
                    error: false,
                    message: "College Added!",
                    college: college
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

//function to get college(s) from the db
exports.getColleges = (req, res) => {

    //executing a query to get all colleges from the db
    College.get({}, (error, colleges) => {
        try{
            if(error){
                res.status(400).json({
                    error: true,
                    message: "Request Failed!"
                });
            }else{
                res.status(200).json({
                    error: false,
                    message: "Success, All Colleges",
                    colleges: colleges
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

//function to update a college
exports.updateCollege = (req, res) => {};

//function to delete a college by _id
exports.deleteCollege = (req, res) => {

    //executing a query to delete a college
    College.delete_college(
        {
            _id: req.params._id
        },
        (error, college) => {
            try{
                if(error){
                    res.status.json({
                        error: true,
                        err: error,
                        message: "Request Failed!"
                    });
                }else{
                    res.status(200).json({
                        error: false,
                        message: "College deleted!"
                    });
                }
            }catch(error){
                res.status(500).json({
                    error: true,
                    err: error,
                    message: "Server Problems, Try again later!"
                });
            }
        }
    );
};