const express = require('express');

const router = express.Router();
const app = express();
app.get("/", async(req, res) => {
    const users = await User.find().lean().exec();

})

module.exports = router;