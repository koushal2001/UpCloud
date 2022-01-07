const express = require("express"); //including express in our project
const bodyParser = require("body-parser"); //body parser used for post request
const app = express();
const mongoose = require("mongoose"); //including mongoose in our project
app.set("view engine", "ejs"); //this statement is necessary to run ejs
app.use(bodyParser.urlencoded({ extended: true })); //for bodyparser



// Connection URL
mongoose.connect("mongodb://localhost:27017/Task2", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//schema
const Sch = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    address: String,
    income: Number,
    martialStatus: String,
    Registration_Number: String,
    Registration_Date: Date,

});

const Person = mongoose.model("person", Sch);



//Get function for login page
app.get("/", function(req, res) {
    res.render("home");
});

app.get("/api", function(req, res) {
    Person.find({}, function(err, data) {
        res.render("api", { data: data });
    })
})

//Post method for login page
app.post("/", function(req, res, err) {
    console.log(req.body);

    const newuser = new Person({
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
        address: req.body.address,
        income: req.body.income,
        martialStatus: req.body.martialStatus,
        Registration_Number: req.body.Registration_Number,
        Registration_Date: req.body.Registration_Date,
    });
    newuser.save();

    res.redirect("/api");

});

//this function is used to run the server on port 5000
const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => {
    console.log(`server started at ${PORT}`);
});