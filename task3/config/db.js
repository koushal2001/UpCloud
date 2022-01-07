const mongoose = require("mongoose");
const config = require("config");
const db = config.get("localDB");

// const connectDB = async() => {
//     try {
//         await mongoose.connect(db, {
//             useUnifiedTopology: true,
//             useNewUrlParser: true,
//         });
//         console.log("Database connected");
//     } catch (error) {
//         console.log(error.message);
//     }
// };

mongoose.student = mongoose.createConnection("mongodb://127.0.0.1:27017/student", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
mongoose.teacher = mongoose.createConnection("mongodb://127.0.0.1:27017/teacher", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
module.exports = mongoose;