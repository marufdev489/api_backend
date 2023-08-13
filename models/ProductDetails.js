const mongoose = require("mongoose");

const productDetailSchema = new mongoose.Schema({
    id:{
        type: Number,
        default: 1,
    },
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
    team: {
        type: String,
        required: [true, "Please enter the required field!"],
        trim: true
    },
    client: {
        type: String,
        required: [true, "Please enter the required field!"],
        trim: true
    },
    duration: {
        type: String,
        required: [true, "Please enter the required field!"],
        trim: true
    },
    url: {
        type: String,
        required: [true, "Please enter the required field!"],
        trim: true
    },
    images: [{
        data: Buffer,
        contentType: String
    }],
})

module.exports = mongoose.model("ProductDetail", productDetailSchema);