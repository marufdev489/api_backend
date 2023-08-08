const mongoose = require("mongoose");

const expertiseSchema = new mongoose.Schema({
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
    },
    sectionTwo: {
        title: {
          type: String,
          required: [true, "Please enter the required field!"],
          trim: true
        },
        content: [{
            sub_title: {
              type: String,
              required: [true, "Please enter the required field!"],
              trim: true
            },
            description: {
              type: String,
              required: [true, "Please enter the required field!"],
              trim: true
            },
            image: {
              data: Buffer,
              contentType: String
            },
          }],
    },
    sectionThree: {
        title: {
          type: String,
          required: [true, "Please enter the required field!"],
          trim: true
        },
        background_image: {
            data: Buffer,
            contentType: String
        },
        content: [{
            sub_title: {
              type: String,
              required: [true, "Please enter the required field!"],
              trim: true
            },
            description: {
              type: String,
              required: [true, "Please enter the required field!"],
              trim: true
            },
        }],
    },
    sectionFour: {
        title: {
          type: String,
          required: [true, "Please enter the required field!"],
          trim: true
        },
        content: [{
            sub_title: {
              type: String,
              required: [true, "Please enter the required field!"],
              trim: true
            },
            image_one: {
              data: Buffer,
              contentType: String
            },
            image_two: {
                data: Buffer,
                contentType: String
            },
            icons: [{
                data: Buffer,
                contentType: String
            }],
        }],
    },
    sectionFive: {
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
        images: [{
            data: Buffer,
            contentType: String
        }],
    },
})

module.exports = mongoose.model("Expertise", expertiseSchema);