const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes/routes")

const app = express();

app.use(express.json());

mongoose.connect('mongodb://mongodb:27017/family-menu-planner', {
  useNewUrlParser: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use(Router);

app.listen(8080, () => {
  console.log("Server is running at port 3000");
});