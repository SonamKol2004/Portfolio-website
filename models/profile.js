const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    github: String,
    linkedin: String
});

module.exports = mongoose.model("Profile", profileSchema);