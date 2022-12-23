const express = require("express");
const router = express.Router();

const Catalog = require("./../model/Catalog");
const Products = require("./../model/Products");

router.get("/main", async (req, res) => {
  try {
    const finalData = await Catalog.aggregate([
      {
        $lookup: {
          from: "products",
          localField: "_id",
          foreignField: "idInCatalog",
          as: "products",
        },
      },
    ]);
    res.json(finalData);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

router.get("/data/:name", async (req, res) => {
  try {
    const category = await Catalog.findOne({
      name: req.params.name,
    });
    const categoryId = category["_id"];
    const productsFromCategory = await Products.find({
      idInCatalog: categoryId,
    });
    res.json(productsFromCategory);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

router.get("/discount/:amount", async (req, res) => {
  try {
    const discounts = await Products.aggregate([
      {
        $lookup: {
          from: "catalogs",
          localField: "idInCatalog",
          foreignField: "_id",
          as: "category",
        },
      },
    ]);
    const finalDiscounts = discounts
      .filter((element) => element.newPrice !== 0)
      .sort((firstElement, secondElement) => {
        return (
          firstElement.newPrice / firstElement.price -
          secondElement.newPrice / secondElement.price
        );
      });
    res.json(finalDiscounts.slice(0, req.params.amount));
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

router.get("/search/:paramSearch", async (req, res) => {
  try {
    const name = req.params.name.charAt(0).toUpperCase()+req.params.name.slice(1).toLowerCase();
    const searchedProducts = await Products.find({
      'name': name,
    });
    res.json(searchedProducts);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

module.exports = router;
