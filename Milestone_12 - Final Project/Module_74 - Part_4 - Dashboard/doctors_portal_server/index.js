const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
require("dotenv").config();
// DB
const { MongoClient, ServerApiVersion } = require("mongodb");

// Use Middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.cj09c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    await client.connect();
    const serviceCollection = client.db("doctorsPortal").collection("services");
    const bookingCollection = client.db("doctorsPortal").collection("bookings");

    //   get all service
    app.get("/service", async (req, res) => {
      const query = {};
      const cursor = serviceCollection.find(query);
      const services = await cursor.toArray();
      res.send(services);
    });
    //   Add booking
    app.post("/booking", async (req, res) => {
      const booking = req.body;
      console.log(booking);
      const query = {
        treatment: booking.treatment,
        date: booking.date,
        patient: booking.patient,
      };
      const exists = await bookingCollection.findOne(query);
      if (exists) {
        return res.send({ success: false, booking: exists });
      }
      const result = await bookingCollection.insertOne(booking);
      return res.send({ success: true, result });
    });

    // Availabe
    app.get("/available", async (req, res) => {
      const date = req.query.date || "May 17, 2022";
      // step1
      const services = await serviceCollection.find().toArray();
      // step2
      const query = { date: date };
      const booking = await bookingCollection.find(query).toArray();

      //step 3
      services.forEach((service) => {
        const serviceBookings = booking.filter(
          (booking) => booking.treatment === service.name
        );
        const booked = serviceBookings.map((service) => service.slot);
        const available = service.slots.filter(
          (slot) => !booked.includes(slot)
        );
        service.available = available;
      });
      res.send(services);
    });
  } finally {
    //   await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Doctors portal is running");
});

app.listen(port, () => {
  console.log(`Doctors running on ${port} port`);
});
