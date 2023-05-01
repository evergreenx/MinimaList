const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../model/user");

const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    console.log(req.body, "body");
    const { email, password } = req.body;

    const user = await User.findOne({ email });

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
        id: user._id,
        email: user.email,
      },
      "secret",
      { expiresIn: "1h" }
    );

    res.status(200).json({
      message: "user logged in successfully",
      token,
    });
  } catch (error) {
    res.status(500).json({
      message: "something went wrong",
      error: true,
    });
  }
});

router.post("/signup", async (req, res) => {
 

  console.log(req, "body");
  let user  = await User.findOne({email: req.body.email});

  if(user){
    return res.status(400).json({
      message: "user already exists",
      error: true,
    });
  }

  else {
    user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
  });
  await user.save();
  res.send(user);
  }
});

module.exports = router;
