const express = require('express');
const productController = require('./controller/product.controller');

const app = express();

app.use("/products", productController)
module.exports = app;