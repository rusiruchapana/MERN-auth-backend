const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const user_schema = new Schema({
    username:{
        type:String,
        required:true,
    },

    email:{
        type:String,
        required:true,
        unique:true
    },

    password:{
        type:String,
        required:true,
    },
},{timestamps:true});

const user_table = mongoose.model("user",user_schema);
module.exports(user_table);






