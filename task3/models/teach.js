const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var con = require("../config/db");
const TeacherSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    ID: {
        type: Number,
        required: true,
    },

});

module.exports = con.teacher.model("Teacher", TeacherSchema);