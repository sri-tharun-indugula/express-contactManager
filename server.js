const express = require("express");
const errorHandler = require("./middleware/errorhandler");
const app = express();
const connectDB=require('./config/dbConnection')
const dotenv = require("dotenv").config();
const cors=require('cors')
connectDB();
// const { MongoClient, ServerApiVersion } = require('mongodb');
// // const dotenv = require("dotenv").config();

// uri=process.env.MONGODB_URL

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

port = process.env.PORT;
app.use(cors())
app.use(express.json());
app.use("/api/contacts", require("./routes/contactroutes"));
app.use(errorHandler);

app.listen(port, () => {
    console.log("its working 1000");
});
