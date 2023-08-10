const mongoose = require("mongoose");

const contactUsSchema = new mongoose.Schema({
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
        }
    },
    sectionTwo: {
        title: {
          type: String,
          required: [true, "Please enter the required field!"],
          trim: true
        }
    },
    sectionThree: {
        title: {
          type: String,
          required: [true, "Please enter the required field!"],
          trim: true
        },
        select_services: [{
            type: String,
            required: [true, "Please enter the required field!"],
            trim: true
        }]
    },
    sectionFour: {
        title: {
          type: String,
          required: [true, "Please enter the required field!"],
          trim: true
        },
        steps: [{
            id: {
                type: Number,
                default: 1,
            },
            text: {
                type: String,
                required: [true, "Please enter the required field!"],
                trim: true
            }
        }]
    }
})

module.exports = mongoose.model("ContactUs", contactUsSchema);