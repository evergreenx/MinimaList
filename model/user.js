const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    min: 6,
    unqiue: true,
  },
  password: {
    type: String,
    required: true,
    min: 6,
  },
}, {
    timestamps: true,
});


module.exports = mongoose.model("User", userSchema);