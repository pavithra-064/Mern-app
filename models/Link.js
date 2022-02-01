const mongoose = require("mongoose");
 
const linkdetails = new mongoose.Schema({
    id:{
        default:0,
        type:Number,
        autoIncrement:true,
    },
    longUrl :{
        type: String,
        required: true,
    },
    shortenedUrl :{
        type: String,
        required: true,
    },
    shortUrl:{
        type: String,
        required: true,
    }
});
 
const cruddb = mongoose.model("linkdetails",linkdetails)
module.exports=cruddb