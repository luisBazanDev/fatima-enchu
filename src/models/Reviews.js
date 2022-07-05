const { model, Schema } = require("mongoose");

const Reviews = new Schema({
  name: String,
  email: String,
  content: String,
});

module.exports = model("Reviews", Reviews);
