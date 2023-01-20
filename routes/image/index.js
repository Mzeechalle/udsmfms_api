const router = require('express').Router();
const cloudinary = require("../../utils/cloudinary/config");
const upload = require("../../utils/multer/config");
const Image = require("../../models/image");

router.post("/upload_image", upload.single('image'), async (req, res) => {
    try {
        const result = await cloudinary.uploader.upload(req.file.path);

        //creating an instance of the image to be uploaded
        let image = new Image({
            image: result.secure_url,
            cloudinary_id: result.public_id
        });

        //save image
        await image.save();
        res.status(200).json({
            error: false,
            message: "Image uploaded!",
            image: image
        });
    } catch (error) {
        res.status(500).json({
            error: true,
            message: "Failed to upload the image!"
        });
    }
});

module.exports = router;
