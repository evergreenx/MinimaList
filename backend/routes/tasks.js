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

router.post("/add", requireAuth, async (req, res) => {
  console.log(req.body);
  try {
    const { title, hour, isToday, userId } = req.body;

    // Create a new instance of the Todo model
    const todo = new Task({
      title,
      hour,
      isToday,
      userId: req.userId,
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

router.get("/task", requireAuth, async (req, res) => {
  try {
    const todos = await Task.find({ userId: req.body.userId });

    res.status(200).json({
      todos,
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
  // res.json(data);

  res.status(200).json({ message: "You are authorized", data: data });
});

module.exports = router;
