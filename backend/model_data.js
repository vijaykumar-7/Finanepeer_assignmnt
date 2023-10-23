const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  userId: Number,
  id: Number,
  title: String,
  body: String
});


const detail = mongoose.model("detail", schema);

module.exports = detail
