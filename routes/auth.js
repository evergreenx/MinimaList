
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../model/user");
const requireAuth = require("../routes/requireAuth");

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;

console.log(JWT_SECRET);
console.log(JWT_SECRET);

let data = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "",
  },
];

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    console.log(JWT_SECRET, "PROCESS");

    // if user is not found
    if (!user) {
      return res.status(401).json({
        message: "invalid email or password",
        error: true,
      });
    }

    // if user is found
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({
        message: "invalid email or password",
        error: true,
      });
    }

    // create token

    const token = jwt.sign(
      {
        user: user._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      message: "user logged in successfully",

      token,
      id: user._id,
      name: user.name,
      email: user.email,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "something went wrong",
      error: true,
    });
  }
});

router.post("/signup", async (req, res) => {
  let user = await User.findOne({ email: req.body.email });

  const hashpassword = await bcrypt.hash(req.body.password, 10);

  if (user) {
    return res.status(400).json({
      message: "user already exists",
      error: true,
    });
  } else {
    // write validation of name , email and password

    if (req.body.name == "") {
      return res.status(400).json({
        message: "name is required",
        error: true,
      });
    }

    if (req.body.email == "") {
      return res.status(400).json({
        message: "email is required",
        error: true,
      });
    }

    if (req.body.password == "") {
      return res.status(400).json({
        message: "password is required",
        error: true,
      });
    }

    user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashpassword,
    });
    await user.save();
    res.send(user);
  }
});

router.get("/protected", requireAuth, (req, res) => {
  //   res.json(data);

  res.status(200).json({ message: "You are authorized", data: data });
});
module.exports = router;
