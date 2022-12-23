//Схема таблицы Каталог
const mongoose = require("mongoose");

const catalogSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imageSrc: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model("catalog", catalogSchema);
