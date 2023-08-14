const mongoose = require('mongoose');

const blogCategorySchema = new mongoose.Schema({
    category_name: {
        type: String,
        required: [true, "Please enter the required field!"],
        trim: true
    },
    contents: [{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BlogCategoryContent'  
    }]
});

module.exports = mongoose.model('BlogCategory', blogCategorySchema);