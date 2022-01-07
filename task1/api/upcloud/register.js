const express = require("express");
const nodemailer = reuire("nodemailer");
const { model } = require("mongoose");
const router = express.Router();
const User = require("../../models/user");

const makeid = () => {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}

const verifyuser = (email, checkstring) => {
    var track = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: "ccc@gaa.com", // own email adress
            pass: "ourpassword"
        }
    });
    var content;
    var sender = "Upcloud";
    content = {
        from: sender,
        to: email,
        subject: "Email Verification",
        html: `Click <a href=https://localhost:5000/api/users/verify/${checkstring}> here</a> to verify email.`
    };

    track.sendMail(content, function(err, res) {
        if (err) {
            console.log(err);
        } else {
            console.log("Sucessfull validation");
        }
    });
}

router.get('/verify/:checkstring', async(req, res) => {
    const checkstring = req.params.checkstring;
    const user = await User.findOne({ checkstring: checkstring });
    if (user) {
        user.isvalid = true;
        await user.save();
    } else {
        res.json("User Not verified");
    }
})

router.get("/", function(req, res) {
    res.render("home");
});
router.post("/", function(req, res) {
    var pass_crypt = crypto.createHash('sha256').update(req.body.password).digest('hex');
    console.log(req.body);
    const email = req.body.email;
    const checkstring = makeid();
    const isvalid = false;
    const person = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        checkstring: checkstring,
        isvalid: isvalid

    });
    await person.save(); // saving into database
    verifyuser(email, checkstring);



});
module.exports = router;