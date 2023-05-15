
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Task = require("../model/task");
const requireAuth = require("./requireAuth");

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


// login route

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

router.post("/add", requireAuth, async (req, res) => {
    try {
      const { title, hour, isToday } = req.body;
  
      // Create a new instance of the Todo model
      const todo = new Task({
        title,
        hour,
        isToday,
        userId: req.user._id,
      });
  
      // Save the todo to the database
      await todo.save();
  
      res.status(201).json({
        message: "Todo created successfully",
        todo,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Something went wrong",
        error: true,
      });
    }
  });
  

// protected route

router.get("/protected", requireAuth, (req, res) => {
  //   res.json(data);

  res.status(200).json({ message: "You are authorized", data: data });
});



module.exports = router;
