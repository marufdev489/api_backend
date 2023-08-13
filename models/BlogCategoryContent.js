const mongoose = require('mongoose');

const blogCategoryContentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please enter the required field!"],
        trim: true
    },
    image: {
        data: Buffer,
        contentType: String
    },
    description: {
        type: String,
        required: [true, "Please enter the required field!"],
        trim: true
    },
    url: {
        type: String,
        trim: true
    }
},
{ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

module.exports = mongoose.model('BlogCategoryContent', blogCategoryContentSchema);

