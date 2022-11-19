const express = require("express")
const postController = require("./post")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

app.listen(process.env.PORT || 5000,()=>{
    console.log("server started at post:500")
})

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(cors())

// mongodb+srv://Mayank10:Mayank10@cluster0.asuhga9.mongodb.net/instaready?retryWrites=true&w=majority

mongoose.connect("mongodb://localhost:27017/instaclone").then((data)=>{
    console.log("Connection Success")
    
}).catch((err)=>{
    console.log(err.message)
})

app.get("/",(req,res)=>{
    res.send("Welcome to instaclone app : server side code")
})

// middleware
app.use("/post",postController)