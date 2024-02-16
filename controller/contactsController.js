const getContacts = (req, res) => {
    res.status(200).json({ message: "get call from route controller" })
}

const getSpecificcontact = (req, res) => {
    res.status(200).json({ message: `get call with specific id:${req.params.id}` })
}

const createContact = (req, res) => {
    const { name, email } = req.body
    if (name && email) {
        console.log(req.body)
        res.status(201).json({ message: "post call from route controller22", name: name, email: email })
    } else {
        console.log('123')
        res.status(400)
        throw new Error("All fields mandatory !")
    }
}

const changeaSpecificContact = (req, res) => {
    res.status(200).json({ message: `put call with specific id:${req.params.id}` })
}

const deleteSpecificContact = (req, res) => {
    res.status(200).json({ message: `delete call with specific id:${req.params.id}` })
}



module.exports = { getContacts, getSpecificcontact, createContact, changeaSpecificContact, deleteSpecificContact }