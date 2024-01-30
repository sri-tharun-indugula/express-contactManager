const express=require("express");

const router=express.Router()

const {getContacts} =require("../controller/contactsController")

router.route('/').get(getContacts)

router.route('/').post((req,res)=>{
    res.status(201).json({message:"post call from route controller"})
})

router.route('/:id').get((req,res)=>{
    res.status(200).json({message:`get call with specific id:${req.params.id}`})
})

router.route('/:id').put((req,res)=>{
    res.status(200).json({message:`put call with specific id:${req.params.id}`})
})

router.route('/:id').delete((req,res)=>{
    res.status(200).json({message:`delete call with specific id:${req.params.id}`})
})



module.exports=router