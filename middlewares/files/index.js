const cloudinary = require("../../utils/cloudinary/config");
const upload = require("../../utils/multer/config");

exports.uploadImageFile = async (req, res, next) => {
    try{
        const results = await cloudinary.uploader.upload(req.file.path);

        req.result = results;

    }catch(error){
        return console.log(error);
    }

    next();
};