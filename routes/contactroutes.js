const express=require("express");

const router=express.Router()

const {getContacts,getSpecificcontact,createContact,changeaSpecificContact,deleteSpecificContact} =require("../controller/contactsController")

router.route('/').get(getContacts).post(createContact)

router.route('/:id').get(getSpecificcontact).delete(deleteSpecificContact).put(changeaSpecificContact)



module.exports=router