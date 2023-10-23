const express = require("express");
const Router = express.Router();
require("./connection");
const bcrypt = require("bcryptjs");
const user = require("./models")
const detail = require("./model_data")

Router.post("/register", async (req, res) => {
  try {
    const data = new user(req.body);
    const emailvalidation = await user.findOne({ email: data.email });
      if (emailvalidation) {
        res.send("this email already exist pls login");
      }
      const save = await data.save();
      res.send(save);
  } catch (error) {
    res.status(404).send(error);
  }
});

Router.post("/login", async (req, res) => {
  try {
    // let is_user = await user.findOne(req.body).select("-password");
    const passworduser = req.body.password;
    const checkemail = req.body.email;
    const databasedata = await user.findOne({ email: checkemail });
    const ismatch = await bcrypt.compare(passworduser, databasedata.password);
    res.send(ismatch);
  } catch (error) {
    res.status(404).send(error);
  }
});

Router.get('/user_details', async(req, res)=>{
    try{
        const getData = await detail.find({});
        res.send(getData);
    }catch{
        res.status(404).send(error);
    }
})

module.exports = Router;
