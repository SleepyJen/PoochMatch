const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    images: {
        data: Buffer,
        contentType: String
    }
});

const Image = mongoose.model('Image', ImageSchema);
module.exports = Image;