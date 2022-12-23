const express = require("express");
//Роутер: передача в api
const router = express.Router();

//Инициализация Схемы 
const Catalog = require("./../model/Catalog");

//get all type in catalog

//Get Запрос всех данных с каталога
router.get("/catalog", async (req, res) => {
  try {
    const allCatalogElements = await Catalog.find();
    res.json(allCatalogElements);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

//Сохранение данных в Каталог
router.post("/catalog", async (req, res) => {
  const catalog = new Catalog({
    ...req.body,
  });

  try {
    const savedCatalog = await catalog.save();
    res.json(savedCatalog);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

module.exports = router;
