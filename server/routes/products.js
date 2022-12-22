const express = require('express');
const router = express.Router();

const Products = require('./../model/Products');

//get all type in catalog

router.get('/product', async (req, res) => {
    try {
        const allProductElements = await Products.find();
        res.json(allProductElements);
    } catch (err) {
        res.status(500).json({ message: err })
    }
});

//save type of catalog
router.post('/product', async (req, res) => {
    const product = new Products({
        ...req.body
    });

    try {
        const savedProduct = await product.save();
        res.json(savedProduct);
    } catch (err) {
        res.status(500).json({ message: err });
    }

});

module.exports = router;