const jwt = require('jsonwebtoken')
require('dotenv').config();

function verifyToken(token) {
    return new Promise(function(resolve, rej) {
        jwt.verify(token, process.env.JWT_SECRET_KEY, function(err, user) {
            if (err) return rej(err);

            return resolve(user)
        })
    })
}

async function authanticate(req, res, next) {
    // if we have received the bearer token in the header
    const bearerToken = req.headers.authorization;
    // if not we will throw an error
    if (!bearerToken || !bearerToken.startsWith('Bearer ')) return res.status(400).send({ message: "Please provide  token" })
        //else we will extract the user from the token
    const token = bearerToken.split(" ")[1];
    try {
        const { user } = await verifyToken(token)
            // else we will attach the user to the req
        req.user = user;
        //return next
        return next();
    } catch (err) {
        return res.status(400).send({ message: "Please provide valid token" })
    }
    // if user not found then throw an error 

}

module.exports = authanticate