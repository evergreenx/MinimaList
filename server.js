const auth = require("./routes/auth");

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


const app = express();

// app.use(bodyParser.json());

mongoose
  .connect(
    "mongodb+srv://evergreenx:dB0YF9xtx3U2rU4a@cluster0.iajg5nt.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Mongo connected");
  })
  .catch((err) => {
    console.error(err);
  });


  app.use(express.json());
// app.use("/api/auth/", auth);

app.use('/api/auth', auth);

app.use('/api/auth', auth);




app.listen(3000, () => {
  // console.log("Server is running on port 3000");
});
