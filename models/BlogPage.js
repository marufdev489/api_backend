const mongoose = require('mongoose');

const blogPageSchema = new mongoose.Schema({
    sectionOne: {
        title: {
          type: String,
          required: [true, "Please enter the required field!"],
          trim: true
        },
        description: {
          type: String,
          required: [true, "Please enter the required field!"],
          trim: true
        },
        background_image: {
            data: Buffer,
            contentType: String
        },
    }
});

module.exports = mongoose.model('BlogPage', blogPageSchema);
