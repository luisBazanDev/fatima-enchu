const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Reviews = require("./models/Reviews.js");
const app = express();

const Api = require("./Router/Api.js");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/", Api);
app.get("/", async (req, res) => {
  const reviews = await Reviews.find();
  res.render("index.ejs", {
    reviews,
  });
});

app.set("view engine", "ejs");

app.listen("5318", () => {
  console.log(`Listen on Port 5318`);
});

mongoose.connect(
  "mongodb+srv://oexG3I6FpbYhH3hF:oexG3I6FpbYhH3hF@darmekdb.cw75e.mongodb.net/Fatiwi?retryWrites=true&w=majority",
  () => {
    console.log("MongoDB connected");
  }
);
