const mongoose = require("mongoose");

const homeContactSchema = new mongoose.Schema({
    company: {
        type: String,
        required: true,
    },
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
    comments: {
        type: String,
    },
    nda:{
        type: String,
    }
})
module.exports = mongoose.model("HomeContact", homeContactSchema);