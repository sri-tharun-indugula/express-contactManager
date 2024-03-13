const expressAsyncHandler=require('express-async-handler');



const getContacts = expressAsyncHandler(async(req, res) => {
  res.status(200).json({ message: "get call from route controller" });
});

const getSpecificcontact = expressAsyncHandler(async(req, res) => {
  res
    .status(200)
    .json({ message: `get call with specific id:${req.params.id}` });
});

const createContact = expressAsyncHandler(async(req, res) => {
  const { name, email,phone } = req.body;
  if (name && email&&phone) {
    console.log(req.body);
    res
      .status(201)
      .json({
        message: "post call from route controller22",
        name: name,
        email: email,
        phone:phone
      });
  } else {
    console.log("123");
    res.status(400);
    throw new Error("All fields mandatory !");
  }
});

const changeaSpecificContact = expressAsyncHandler(async(req, res) => {
  res
    .status(200)
    .json({ message: `put call with specific id:${req.params.id}` });
});

const deleteSpecificContact = expressAsyncHandler(async(req, res) => {
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
