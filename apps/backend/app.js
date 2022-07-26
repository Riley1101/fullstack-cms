require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes");
const bodyParser = require("body-parser");

/*
  DB CONNECTION 
*/
const mongoString = process.env.DATABASE_URL;
mongoose.connect(mongoString);
const database = mongoose.connection;
database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

/*
  EXPRESS SERVER START
*/
const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const PORT = 1337;

app.use("/api", router);

app.listen(process.env.PORT || 3000, () => {
  console.log(`[INFO] : SERVER STARTED AT http://localhost:${3000}`);
});
