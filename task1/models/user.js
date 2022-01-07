const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    checkstring: {
        type: String,
        required: true,
    },
    isvalid: {
        type: Boolean,
        required: true,
    },
});

module.exports = mongoose.model("User", userSchema);