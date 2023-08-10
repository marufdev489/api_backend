const mongoose = require('mongoose');

const portfolioContentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter the required field!"],
        trim: true
    },
    front_image: {
        data: Buffer,
        contentType: String
    },
    hover_image: {
        data: Buffer,
        contentType: String
    },
    url: {
        type: String,
        trim: true
    }
});

module.exports = mongoose.model('Content', portfolioContentSchema);

