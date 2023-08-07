const mongoose = require("mongoose");

const aboutUsSchema = new mongoose.Schema({
    sectionOne: {
        title: {
          type: String,
          required: [true, "Please enter the required field!"],
          trim: true
        },
        content: {
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
        small_title_one: {
            type: String,
            required: [true, "Please enter the required field!"],
            trim: true
        },
        small_title_two: {
            type: String,
            required: [true, "Please enter the required field!"],
            trim: true
        },
        description_one: {
          type: String,
          required: [true, "Please enter the required field!"],
          trim: true
        },
        description_two: {
            type: String,
            required: [true, "Please enter the required field!"],
            trim: true
        },
        background_image: {
            data: Buffer,
            contentType: String
        },
    },
    sectionThree: {
        title: {
          type: String,
          required: [true, "Please enter the required field!"],
          trim: true
        },
        team_members: {
          type: Number,
          default: 30,
        },
        satisfied_customers: {
            type: Number,
            default: 100,
        },
        software_engineers: {
            type: Number,
            default: 80,
        },
        customer_retention_rate: {
            type: Number,
            default: 96,
        },
        background_image: {
          data: Buffer,
          contentType: String
        },
    },
    sectionFour: {
        title: {
          type: String,
          required: [true, "Please enter the required field!"],
          trim: true
        },
        content: [{
          name: {
            type: String,
            required: [true, "Please enter the required field!"],
            trim: true
          },
          designation: {
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
        }],
    },
    sectionFive: {
        title: {
          type: String,
          required: [true, "Please enter the required field!"],
          trim: true
        },
        description_one: {
          type: String,
          required: [true, "Please enter the required field!"],
          trim: true
        },
        description_two: {
            type: String,
            required: [true, "Please enter the required field!"],
            trim: true
        },
        description_three: {
            type: String,
            required: [true, "Please enter the required field!"],
            trim: true
        },
        description_four: {
            type: String,
            required: [true, "Please enter the required field!"],
            trim: true
        },
    },
    sectionSix: {
        title: {
          type: String,
          required: [true, "Please enter the required field!"],
          trim: true
        },
        short_desc_one: {
            type: String,
            required: [true, "Please enter the required field!"],
            trim: true
        },
        short_desc_two: {
            type: String,
            required: [true, "Please enter the required field!"],
            trim: true
        },
        short_desc_three: {
            type: String,
            required: [true, "Please enter the required field!"],
            trim: true
        },
        short_desc_four: {
            type: String,
            required: [true, "Please enter the required field!"],
            trim: true
        },
        short_desc_five: {
            type: String,
            required: [true, "Please enter the required field!"],
            trim: true
        },
    }, 
    sectionSeven: {
        title: {
            type: String,
            required: [true, "Please enter the required field!"],
            trim: true
        },
        image: [{
            data: Buffer,
            contentType: String
        }],
    },
    sectionEight: {
        title: {
            type: String,
            required: [true, "Please enter the required field!"],
            trim: true
        },
        small_title: {
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

module.exports = mongoose.model("AboutUs", aboutUsSchema);