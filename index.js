const express = require("express");
const mongoose = require("mongoose")
//const bodyParser = require("body-parser")
const cors = require("cors")
require("dotenv").config()
const app = express()
const path=require("path");
 
const model=require("./models/User");
const link = require("./models/Link");
require("dotenv").config();


app.use(express.json())
app.use(cors());
app.use(express.urlencoded({extended:false}))
/*
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://pavithra-064:Shaposu3217@cruddb.si1xg.mongodb.net/cruddb?retryWrites=true&w=majority",{
    });
    console.log('MongoDB connected!!');
  }catch(err){
    console.log('Failed to connect to MongoDB ', err);
  }
}
*/
/*mongoose.connect("mongodb+srv://pavithra-064:Shaposu3217@cruddb.si1xg.mongodb.net/cruddb?retryWrites=true&w=majority&ssl=true", 
mongoose.connect("mongodb+srv://pavithra-064:Shaposu3217@cruddb-shard-00-00.si1xg.mongodb.net:27017,cruddb-shard-00-01.si1xg.mongodb.net:27017,cruddb-shard-00-02.si1xg.mongodb.net:27017/cruddb?ssl=true&replicaSet=atlas-c56vv8-shard-0&authSource=admin&retryWrites=true&w=majority",
*/
mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://pavithra-064:Shaposu3217@cruddb.si1xg.mongodb.net/cruddb?retryWrites=true&w=majority",{
 }, 
()=>{
   console.log("DB connected");
});

app.post('/register',async(req,res)=>{
    const username =req.body.username;
    const useremail=req.body.useremail;
    const password=req.body.password;
    const user= new model({username:username, useremail:useremail,password:password});
   
    try{
      await user.save();
      res.send("inserted data");
    }catch(err){
      console.log(err);
    }
});
 
app.post('/login',async(req,res)=>{
  const username=req.body.username;
 
  const password=req.body.password ;

   await model.findOne({ username:username}, (err,user)=>{
    if(err){
      console.log(err);
      res.send({message: err});
    }
    if(user){
  
      if(password===user.password){
        
        res.send({message:"Login Successful",user:user})
      }else{
        console.log("user exist");
        res.send({message:" Password didn't match"})
      }
    } else{
      res.send({message:"User not registered"})
    }
  }).clone();
 
})


app.post("/api/url",async(req,res)=>{
  const longUrl=req.body.longUrl;
  const shortenedUrl=req.body.shortenedUrl;
  const shortUrl=req.body.shortUrl;
  const Link = new link({longUrl:longUrl,shortenedUrl:shortenedUrl,shortUrl:shortUrl});
 try{
  await Link.save();
  res.send("Inserted data");
}catch(err){
  console.log(err);
}
});  
 
app.post("/check",async(req,res)=>{
  const longUrl=req.body.longUrl;
  link.findOne({longUrl:longUrl},(err,url)=>{
    if(err){
      res.send({err:err});
    }
    if(url){
      res.send({message:url.shortUrl})
   
    }
    else{
      res.send({message:"null"})
   
    }
  })
})
 
app.get("/read",async(req,res)=>{
  model.find({},(err,result)=>{
    if(err){
      res.send(err);
    }else {
      res.send(result);
    }
  });
});
 
/*app.post('/shortUrl',async (req,res)=>{
  await link.create({ longUrl:req.body.fullUrl})
  res.redirect('/')
})*/
 
app.get("/*", async(req,res)=>{
  const shortenedUrl=req.params[0]
const shortUrl= await link.findOne({ shortenedUrl:shortenedUrl})
if(!shortUrl) return res.sendStatus(404)
res.redirect(shortUrl.longUrl)
})
 
const PORT = process.env.PORT || 3001;

 
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});