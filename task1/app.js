const express = require("express");
const bodyParser = require("body-parser"); //body parser used for post request
const mongoose = require("mongoose");
const app = express();
const connectDB = require("./config/db");
app.set("view engine", "ejs"); //this statement is necessary to run ejs
app.use(bodyParser.urlencoded({ extended: true })); //for bodyparser
const authRoutes = require("./api/upcloud/register");


connectDB();

app.use("/api/users", authRoutes);

const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => {
    console.log(`server started at ${PORT}`);
});