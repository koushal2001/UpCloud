const express = require("express"); //including express in our project
const bodyParser = require("body-parser"); //body parser used for post request
const app = express();
const mongoose = require("mongoose"); //including mongoose in our project
app.set("view engine", "ejs"); //this statement is necessary to run ejs
app.use(bodyParser.urlencoded({ extended: true })); //for bodyparser
const Student = require("../../models/stu");
const router = express.Router();
app.set("view engine", "ejs"); //this statement is necessary to run ejs

//add Information
router.get("/", function(req, res) {
    res.render("student");
});

router.post("/", function(req, res, err) {
    // Printing ALl info on console

    console.log(req.body);

    const newustudent = new Student({
        name: req.body.name,
        Roll: req.body.roll,
        email: req.body.email,
    });
    newustudent.save();

});

// To fetch and print all the teachers and students
app.get("/api", function(req, res) {
    Student.find({}, function(err, data) {
        console.log(data);
    })
})

module.exports = router;