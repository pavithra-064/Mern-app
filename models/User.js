const mongoose = require("mongoose");
 
const userdetails = new mongoose.Schema({
    id:{
        type:Number,
        autoIncrement:true,
    },
    username :{
        type: String,
        required: true,
    },
    useremail :{
        type: String,
        required: true,
    },
    password :{
        type:String,
        required:true,
    }
});
 
const cruddb = mongoose.model("userdetails",userdetails)
module.exports=cruddb