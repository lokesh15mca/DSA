const app = require('./index');

const connect = require('./config/db');

app.listen(2000, async function(req, res) {
    await connect();
    console.log("Server is running on port 2345 ....");
})