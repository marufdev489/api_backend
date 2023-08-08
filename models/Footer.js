const mongoose = require("mongoose");

const footerSchema = new mongoose.Schema({
    image: {
        data: Buffer,
        contentType: String
    },
    phone: {
        type: String,
        required: [true, "Please enter the required field!"],
    },
    email: {
        type: String,
        required: [true, "Please enter the required field!"],
        trim: true
    },
    address: {
        type: String,
        required: [true, "Please enter the required field!"],
    },
    additional_data: {
        type: String,
        required: [true, "Please enter the required field!"],
        trim: true
    },
    icons: [{
        data: Buffer,
        contentType: String
    }],
})

module.exports = mongoose.model("Footer", footerSchema);