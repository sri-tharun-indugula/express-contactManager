const express=require('express');
const errorHandler=require('./middleware/errorhandler')
const app=express()

const dotenv=require("dotenv").config();

port=process.env.PORT
app.use(express.json())
app.use("/api/contacts",require("./routes/contactroutes"))
app.use(errorHandler)



app.listen(port,()=>{
    console.log("its working 1000")
})