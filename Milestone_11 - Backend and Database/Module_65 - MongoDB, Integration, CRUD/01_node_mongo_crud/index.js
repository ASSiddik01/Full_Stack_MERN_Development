const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// Use middle ware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server Port ${port}`);
});
