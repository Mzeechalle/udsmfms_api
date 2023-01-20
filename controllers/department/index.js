//handling HTTP requests
var Department = require("../../data/department");

//function to create a department
exports.create_department = (req, res) => {

    //creating an object department
    var department = {
        college: req.body.college,
        dept_name: req.body.dept_name,
        dept_abbrv: req.body.dept_abbrv,
        dept_hod: req.body.dept_hod,
        dept_secretary: req.body.dept_secretary
    };

    //executing a query to create a department by inserting an object department
    Department.create(department, (error, department) => {
        try{
            if(error){
                res.status(400).json({
                    error: true,
                    message: "Request Failed"
                });
            }else{
                res.status(200).json({
                    error: false,
                    message: "Department created!",
                    department: department
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

//function to get all departments
exports.get_departments = (req, res) => {
    //executing a query to read all the departments from db
    Department.get({}, (error, departments) => {
        try{
            if(error){
                res.status(400).json({
                    error: error,
                    message: "Request failed!"
                });
            }else{
                res.status(200).json({
                    departments: departments
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

//function to update a department
exports.update_department = (req, res) => {

    //creating an object department
    var department = {
        dept_name: req.body.dept_name,
        dept_abbrv: req.body.dept_abbrv,
        dept_hod: req.body.dept_hod,
        dept_secretary: req.body.dept_secretary
    };

    //executing a query to update a department
    Department.update_department(
        {
            _id: req.params._id
        },
        department,
        (error, department) => {
            try{
                if(error){
                    res.status(400).json({
                        error: true,
                        err: error,
                        message: "Request Failed!"
                    });
                }else{
                    res.status(200).json({
                        error: false,
                        message: "Department Updated!",
                        department: department
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

//function to delete a department
exports.delete_department = (req, res) => {

    //executing a query to delete a department
    Department.delete_department(
        {
            _id: req.params._id
        },
        (error) => {
            try{
                if(error){
                    res.status(400).json({
                        error: error,
                        message: "Request Failed!"
                    });
                }else{
                    res.status(200).json({
                        message: "Department Deleted"
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