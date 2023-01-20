const multer = require('multer');
const path = require('path');

//configuring the multer
module.exports = multer({
    storage: multer.diskStorage({}),
    fileFilter: (req, file, cb) => {

        //getting the extension of the file
        let ext = path.extname(file.originalname);

        if(ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png" && ext !== ".JPG" && ext !== ".JPEG" && ext !== ".PNG"){
            cb(new Error("File type is not supported!"), false);
            return;
        }

        cb(null, true);
    },
});