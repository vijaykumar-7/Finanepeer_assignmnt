const mongoose = require("mongoose");
const config = require("./config")

mongoose
  .connect(`mongodb://${config.db.url}/${config.db.name}`)
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log(err);
  });