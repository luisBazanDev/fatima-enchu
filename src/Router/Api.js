const express = require("express");
const Router = express.Router();
const Reviews = require("../models/Reviews.js");

Router.post("/review", async (req, res) => {
  const review = new Reviews();
  review.name = req.body.name;
  review.email = req.body.email;
  review.content = req.body.content;
  await review.save();
  res.redirect("/");
});

module.exports = Router;
