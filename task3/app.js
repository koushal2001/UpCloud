const express = require("express");
const app = express();
const studentRoutes = require("./Routes/api/student");
const teacherRoutes = require("./Routes/api/teacher");

//middleware
app.use(express.json());

//connect to database
require("./config/db");
app.use("/api/student", studentRoutes);
app.use("/api/teacher", teacherRoutes);



//listen to PORT
const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => {
    console.log(`server started at ${PORT}`);
});