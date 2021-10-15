const express = require('express');

const uplode = require("../middlewares/file-upload")

const router = express.Router();

router.post("/single", upload, async function(req, res) {
    const product = await Product.create({
        name: req.body.name,
        price: req.body.price,
        img_url: req.body.path
    })
    return res.send("Single")
})

router.post("/multple", upload, function(req, res) {
    return res.send("Multiple")
})

module.exports = router;