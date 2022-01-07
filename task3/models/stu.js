const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var con = require("../config/db");
const StudentSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    Roll: {
        type: Number,
        required: true,
    },

});

module.exports = con.student.model("Student", StudentSchema);