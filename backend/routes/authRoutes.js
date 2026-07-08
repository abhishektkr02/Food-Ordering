const express = require("express");
const router = express.Router();

const User = require("../models/User");

router.post("/register", async (req, res) => {

    try {

        const user = new User(req.body);

        await user.save();

        res.json({
            message: "User Registered Successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

router.post("/login", async (req, res) => {

    try {

        const { email, password } = req.body;

        const user = await User.findOne({
            email,
            password,
        });

        if (!user) {

            return res.status(401).json({
                message: "Invalid Email or Password",
            });

        }

        res.json({
            message: "Login Successful",
            user,
        });

    } catch (error) {

        res.status(500).json({
            message: error.message,
        });

    }

});

module.exports = router;