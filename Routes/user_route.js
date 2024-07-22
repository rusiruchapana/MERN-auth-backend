const express = require("express");
const router = express.Router();
const user = require("../Models/user_model");


router.get("/",(req,res)=>{
        console.log(user);
        res.send("Simple get request.");
});








module.exports = router;







