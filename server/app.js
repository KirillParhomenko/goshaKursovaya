const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

const port = "3001";

//connect mongo db
mongoose.set("strictQuery", true);
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => {
  console.log(error);
});
db.once("open", () => {
  console.log("Connected to db!");
});

//middle ware
app.use(bodyParser.json());
app.use(cors({ origin: "*" }));

//imports the routes
const catalogRoute = require("./routes/catalog");
const productsRoute = require("./routes/products");
const mainInformation = require("./routes/multiple");
app.use("/api", catalogRoute);
app.use("/api", productsRoute);
app.use("/api", mainInformation);

app.listen(port);
