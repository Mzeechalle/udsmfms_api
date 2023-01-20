var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var imageSchema = new Schema({
    image:{
        type: String
    },
    cloudinary_id:{
        type: String
    }
});

module.exports = mongoose.model("Images", imageSchema);