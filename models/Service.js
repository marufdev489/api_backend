const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
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
            keywords: [{
                type: String,
                required: [true, "Please enter the required field!"],
                trim: true
            }],
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
            pricing_model: {
                type: String,
                required: [true, "Please enter the required field!"],
                trim: true
            },
            terms: {
                type: Number,
                default: 9,
            },
            team_size: {
              type: String,
              required: [true, "Please enter the required field!"],
              trim: true
            }
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
    }
})

module.exports = mongoose.model("Service", serviceSchema);