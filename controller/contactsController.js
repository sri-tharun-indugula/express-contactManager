const getContacts=(req,res)=>{
    res.status(200).json({message:"get call from route controller"})
}



module.exports={getContacts}