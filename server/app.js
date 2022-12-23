//Инициализация фреймворка и библиотек
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
//Инициализация конфига
require("dotenv/config");

//Порт для подключение к бд
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
//обрабатывает json
app.use(bodyParser.json());
//дает доступ к нашему api 
app.use(cors({ origin: "*" }));

//imports the routes
//подключаем наши запросы к express 
const catalogRoute = require("./routes/catalog");
const productsRoute = require("./routes/products");
const mainInformation = require("./routes/multiple");
app.use("/api", catalogRoute);
app.use("/api", productsRoute);
app.use("/api", mainInformation);

app.listen(port);
