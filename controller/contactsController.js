const getContacts=(req,res)=>{
    res.status(200).json({message:"get call from route controller"})
}

const getSpecificcontact=(req,res)=>{
    res.status(200).json({message:`get call with specific id:${req.params.id}`})
}

const createContact=(req,res)=>{
    res.status(201).json({message:"post call from route controller"})
}

const changeaSpecificContact=(req,res)=>{
    res.status(200).json({message:`put call with specific id:${req.params.id}`})
}

const deleteSpecificContact=(req,res)=>{
    res.status(200).json({message:`delete call with specific id:${req.params.id}`})
}



module.exports={getContacts,getSpecificcontact,createContact,changeaSpecificContact,deleteSpecificContact}