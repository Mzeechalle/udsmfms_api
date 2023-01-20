const Department = require("../../data/department");

exports.getDeptId = async (dept_abbrv) => {
    const matching = "/" + dept_abbrv + "/";
    const dept = await Department.find({dept_abbrv: /CSE/})

    return dept;

};