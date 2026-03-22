const express = require("express");
const app = express();
const path = require("path");
const userModel = require("./models/user")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.render("index");
})
app.post("/create", function (req, res) {
    let { username, email, password, age } = req.body;

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {

            let createdUser = await userModel.create({
                username,
                email,
                password: hash,
                age
            })

            let token = jwt.sign({ email }, "secret");
            res.cookie("token", token);
            res.send(createdUser)
        })
    })

})

app.get("/logout", function (req, res) {
    res.cookie("token", "")
    res.redirect("/");
})

app.get("/login", function (req, res) {
    res.render("login");
})

app.post("/login", async function (req, res) {
    let user = await userModel.findOne({ email: req.body.email }) // If user exists then returns user's info othewise returns null

    if (user === null) return res.send("Something went wrong");
    bcrypt.compare(req.body.password, user.password, function (err, result) {
        if (result) {
            let token = jwt.sign({ email: user.email }, "secret");
            res.cookie("token", token);
            res.send("You logedin");
        }
        else res.send("something went wrong");
    });

})

app.listen(3000);
