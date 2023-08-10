const mongoose = require("mongoose");

const contactFormSchema = new mongoose.Schema({
    question_1: {
        type: String,
    },
    question_2: {
        type: String,
    },
    question_3: {
        type: String,
    },
    question_4: {
        type: String,
    },
    question_5: {
        type: String,
    },
    question_6: {
        type: String,
    },
    question_7: {
        type: String,
    },
    question_8: {
        type: String,
    },
    question_9: {
        type: String,
    },
    question_10: {
        type: String,
    },
    question_11: {
        data: Buffer,
        contentType: String
    },
    question_12: {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        details: {
            type: String,
        }
    },
    subscription: {
        type: String,
    }
})

module.exports = mongoose.model("ContactForm", contactFormSchema);