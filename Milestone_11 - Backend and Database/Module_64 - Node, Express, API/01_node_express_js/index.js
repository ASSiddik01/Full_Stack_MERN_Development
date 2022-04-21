const express = require("express");
var cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World from nodemon!");
});

// Step 3
const users = [
  { id: 1, name: "Shama", phone: "0199999999" },
  { id: 2, name: "Sunnay", phone: "0199999999" },
  { id: 3, name: "Sweet", phone: "0199999999" },
  { id: 4, name: "Shakib", phone: "0199999999" },
  { id: 5, name: "Sojib", phone: "0199999999" },
];

// Step 2
app.get("/users", (req, res) => {
  res.send(users);
});

// Step 4
app.get("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((user) => user.id === id);
  res.send(user);
});

app.listen(port, () => {
  console.log(`Runnig Port is: ${port}`);
});
