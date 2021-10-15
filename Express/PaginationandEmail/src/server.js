// const express = require('express');

const connect = require('./configs/db')
const app = require('./index')

// const app = express();

app.listen(2345, async(req, res) => {
    await connect();
    console.log("Server is running on port 2345");
})