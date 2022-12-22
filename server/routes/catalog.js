const express = require("express");
const router = express.Router();

const Catalog = require("./../model/Catalog");

//get all type in catalog

router.get("/catalog", async (req, res) => {
  try {
    const allCatalogElements = await Catalog.find();
    res.json(allCatalogElements);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

//save type of catalog
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
