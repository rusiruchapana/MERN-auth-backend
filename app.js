const express = require("express");
const app  = express();
const mongoose = require("mongoose");
require("dotenv").config();
app.use(express.json());
const userRoutes = require("./Routes/user_route");




const url = process.env.CONN;


mongoose.connect(url)
        .then(()=>{
            console.log("Connected to the database succesfully.");
        })
        .catch((err)=>{
            console.log("Error: ",err);
        });


app.use("/user", userRoutes);


app.listen(3000,(req,res)=>{
    console.log("Server is started.");
});