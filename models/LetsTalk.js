const mongoose = require("mongoose");

const letsTalkSchema = new mongoose.Schema({
    service: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    form_data: {
        name: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        budget: {
            type: Number,
        },
        description: {
            type: String,
        }
    }
})
module.exports = mongoose.model("LetsTalk", letsTalkSchema);