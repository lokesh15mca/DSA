const express = require('express');

const router = express.Router();

const Product = require("../models/product.model")

const authen = require('../middlewaras/authantication')
router.get("/new", function(req, res) {
    return res.render("products/new")
})

router.get("/", authen, async function(req, res) {
    const products = await Product.find().lean().exec();

    const user = req.user;
    return res.send({ products, user })
})
module.exports = router