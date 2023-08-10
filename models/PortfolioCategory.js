const mongoose = require('mongoose');

const portfolioCategorySchema = new mongoose.Schema({
    category_name: {
        type: String,
        required: [true, "Please enter the required field!"],
        trim: true
    },
    contents: [{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Content'  
    }]
});

module.exports = mongoose.model('Category', portfolioCategorySchema);