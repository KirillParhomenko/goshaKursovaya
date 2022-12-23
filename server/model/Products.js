//Схема таблицы Продукты
const mongoose = require("mongoose");

const productsSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imageSrc: {
    type: String,
    default: "",
  },
  price: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  newPrice: {
    type: Number,
    default: 0.0,
  },
  //Нужно для связывания таблиц
  idInCatalog: {
    ref: "catalogs",
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
});

module.exports = mongoose.model("products", productsSchema);
