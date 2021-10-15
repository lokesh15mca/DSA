const express = require('express');
const { register, login } = require('./controllers/auth.controller')

const productController = require('./controllers/product.controller');
const app = express();

app.use(express.json());

app.post("/register", register);
app.post("/login", login);

app.use("/products", productController)
    // app.post("/login", function(req, res) {
    //     return res.send("hello")
    // })
module.exports = app;