const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require("mongodb");
const ObjectId = require("mongodb").ObjectId;

// Use middle ware
app.use(cors());
app.use(express.json());

// DB
const uri =
  "mongodb+srv://demoDBUser:emz6vnftTjcNQOiC@cluster0.az1nq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    await client.connect();
    const userCollection = client.db("test").collection("users");
    // Get User
    app.get("/user", async (req, res) => {
      const query = {};
      const cursor = userCollection.find(query);
      const users = await cursor.toArray();
      res.send(users);
    });
    // Post user
    app.post("/user", async (req, res) => {
      const newUser = req.body;
      console.log("new user", newUser);
      const result = await userCollection.insertOne(newUser);
      res.send(result);
    });

    // Delete User
    app.delete("/user/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId };
    });
  } finally {
    // await client.close();
  }
}

run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello Server!");
});

app.listen(port, () => {
  console.log(`Server Port ${port}`);
});
