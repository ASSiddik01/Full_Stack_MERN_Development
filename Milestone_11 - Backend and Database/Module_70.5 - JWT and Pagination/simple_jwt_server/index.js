const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
var jwt = require("jsonwebtoken");
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
  if (user.email === "me@me.com" && user.password === "12345") {
    const accessToken = jwt.sign(
      { email: user.email },
      process.env.ACCESS_TOKEN,
      {
        expiresIn: "1d",
      }
    );
    res.send({
      success: true,
      accessToken: accessToken,
    });
  } else {
    res.send({ success: false });
  }
  //   console.log(user);
});

app.listen(port, () => {
  console.log(`Running port number ${port}`);
});
