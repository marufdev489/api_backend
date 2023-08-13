const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    sectionOne: {
        title: {
          type: String,
          required: [true, "Please enter the required field!"],
          trim: true
        },
        background_image: {
            data: Buffer,
            contentType: String
        },
        description: {
            type: String,
            required: [true, "Please enter the required field!"],
            trim: true
        },
    },
    sectionTwo: [{
        id:{
          type: Number,
          default: 1,
        },
        title: {
          type: String,
          required: [true, "Please enter the required field!"],
          trim: true
        },
        short_title: {
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
        icons: [{
            data: Buffer,
            contentType: String
        }],
    }],
    sectionThree: {
        title: {
          type: String,
          required: [true, "Please enter the required field!"],
          trim: true
        },
        short_title: {
            type: String,
            required: [true, "Please enter the required field!"],
            trim: true
        },
        description: {
          type: String,
          required: [true, "Please enter the required field!"],
          trim: true
        },
        image: [{
            data: Buffer,
            contentType: String
        }],
    },
})

module.exports = mongoose.model("Product", productSchema);