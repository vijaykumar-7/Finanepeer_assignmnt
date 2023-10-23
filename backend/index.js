const express = require('express');
const app = express();
const route = require('./router')
const cors = require("cors");
const port = 7500;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(route);

app.get('/',(req, resp)=>{
    resp.send("hello everybody")
})

app.listen(port, ()=>{
    console.log("server running");
})