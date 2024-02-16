const errorHandler=(err,req,res,next)=>{
    const statusCode=res.statusCode ? res.statusCode:500;
    console.log("111",err.message)
    res.json({message:err.message,code:statusCode})
};

module.exports=errorHandler