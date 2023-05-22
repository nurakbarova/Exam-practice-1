const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

//SECURITY Schema
const SecuritySchema = new Schema({
  name: String,
  imageURL: String,
});

//SECURITY Model
const SecurityModel = mongoose.model("SecurityModel", SecuritySchema);

mongoose
  .connect(
    process.env.DB_CONNECTION.replace("<password>", process.env.DB_PASSWORD)
  )
  .then(() => console.log("mongo db connect"));

app.get("/api", (req, res) => {
  res.send("Welcome APi");
});



PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`api ${PORT}`);
});
