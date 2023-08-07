const mongoose = require("mongoose");

const homeSchema = new mongoose.Schema({
    banner: {
        data: Buffer,
        contentType: String
    },
    sectionOne: {
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
        content: {
          type: String,
          required: [true, "Please enter the required field!"],
          trim: true
        },
        image: {
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
        image: {
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
            background_image: {
              data: Buffer,
              contentType: String
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
            sub_title_two: {
                type: String,
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
    sectionFive: {
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
            keyword: [{
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
    sectionSix: {
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
    sectionSeven: {
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
    sectionEight: {
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
            sub_title_two: {
                type: String,
                required: [true, "Please enter the required field!"],
                trim: true
            },
            short_description: {
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
    sectionNine: {
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
    sectionTen: {
        title: {
          type: String,
          required: [true, "Please enter the required field!"],
          trim: true
        },
        content: [{
            name: {
                data: Buffer,
                contentType: String
            },
            designation: {
                data: Buffer,
                contentType: String
            },
            description: {
              type: String,
              required: [true, "Please enter the required field!"],
              trim: true
            },
            image: {
              data: Buffer,
              contentType: String
            }
        }],
    },
})

module.exports = mongoose.model("Home", homeSchema);