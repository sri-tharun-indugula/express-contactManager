const expressAsyncHandler = require("express-async-handler");

const Contact = require("../models/contactsModel");

const getContacts = expressAsyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
});

const getSpecificcontact = expressAsyncHandler(async (req, res) => {
  const contacts = await Contact.findById(req.params.id);
  if (!contacts) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(contacts);
});

const createContact = expressAsyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    console.log("123");
    res.status(400);
    throw new Error("All fields mandatory !");
  }
  const contacts = await Contact.create({
    name,
    email,
    phone,
  });
  res.status(201).json(contacts);
});

const changeaSpecificContact = expressAsyncHandler(async (req, res) => {
  res
    .status(200)
    .json({ message: `put call with specific id:${req.params.id}` });
});

const deleteSpecificContact = expressAsyncHandler(async (req, res) => {
  res
    .status(200)
    .json({ message: `delete call with specific id:${req.params.id}` });
});

module.exports = {
  getContacts,
  getSpecificcontact,
  createContact,
  changeaSpecificContact,
  deleteSpecificContact,
};
