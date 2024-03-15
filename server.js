const express = require("express");

const errorHandler = require("./middleware/errorhandler");

const app = express();

const connectDB = require("./config/dbConnection");

const dotenv = require("dotenv").config();

const cors = require("cors");
connectDB();

port = process.env.PORT;
app.use(cors());
app.use(express.json());
app.use("/api/contacts", require("./routes/contactroutes"));
app.use(errorHandler);

app.listen(port, () => {
    console.log("its working 1000");
});
