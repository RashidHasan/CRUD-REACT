const cors = require('cors'); // Import the cors middleware
const express = require("express");
const mongoose = require("mongoose");
const UserModel = require("./models/Users");

const app = express();

// Define CORS options
const corsOptions = {
  origin: 'https://crud-react-ri5o.vercel.app', // replace with your Vercel frontend URL
  optionsSuccessStatus: 200,
};

// Apply CORS middleware with options
app.use(cors(corsOptions));
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://rashedmycourses:7nXwg3bmK9MPxuhva@cluster0.6jywxwd.mongodb.net/crud?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB Atlas:", error);
  });

app.get("/", (req, res) => {
  UserModel.find({})
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.get("/getUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findById({ _id: id })
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.put("/updateUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndUpdate(
    { _id: id },
    { name: req.body.name, email: req.body.email, phone: req.body.phone }
  )
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

app.delete("/deleteUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndDelete({ _id: id })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.post("/createUser", (req, res) => {
  UserModel.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("Server is Running on port 3001");
});
