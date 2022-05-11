const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running");
});

// Login api
app.post("/login", (req, res) => {
  const user = req.body;
  console.log(user);
  res.send({ success: true });
});

app.listen(port, () => {
  console.log(`Running port number ${port}`);
});
