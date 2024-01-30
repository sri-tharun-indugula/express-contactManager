const express=require('express');

const app=express()

const dotenv=require("dotenv").config();

port=process.env.PORT


app.use("/api/contacts",require("./routes/contactroutes"))

app.listen(port,()=>{
    console.log("its working")
})