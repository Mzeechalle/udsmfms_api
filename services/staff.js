const fetchUrl = require("fetch").fetchUrl;
const url_link = `https://kelvinkedyson.com:4700/api`
const GETSTAFFDATABYEMAIL = new URL( url_link + "/staff/get_staff_by_em/" )

exports.getStaffByEmail = (email, cbsf, cbef) => {
    try{
        fetchUrl(GETSTAFFDATABYEMAIL + email, (error, meta, response) => {
            cbsf(JSON.parse(response.toString()))
        });
    }catch(error){
        cbef(error);
    }
};