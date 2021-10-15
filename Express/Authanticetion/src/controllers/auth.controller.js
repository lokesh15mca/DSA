const jwt = require('jsonwebtoken')
require("dotenv").config();

const User = require('../models/user.model');

const newToken = (user) => {
    return jwt.sign({ user }, process.env.JWT_SECRET_KEY)
}

const register = async(req, res) => {
    //First We check if user with same email already exists

    let user;
    try {
        user = await User.findOne({ email: req.body.email })
        console.log("user 26 " + user)
            //if yes then we troe an error that email already exists
        if (user) return res.status(400).send({ message: "PLease check your user name and password" })

        //else we will create the user with the mail and password
        // but before saving the password we need to hash it.
        user = await User.create(req.body);
        console.log("user 30" + user)

        // we will create a token 
        const token = newToken(user);
        console.log("token " + token)
            // we will send the token to the frontend
        return res.status(200).send({ user, token })
    } catch (e) {
        return res.status(500).send({ message: "Sorry for inconvenience please try again later" })
    }

    // return res.send("ragister")
}

const login = async(req, res) => {
    try {
        // first we will check id user with same email already exists
        let user = await User.findOne({ email: req.body.email })
            // if not exists we throw an error
        if (!user) return res.status(400).send({ message: "Please check mail and pwd" })
            // if it exists then we match the password
        let match = user.checkPassword(req.body.password);
        // if password not match then throw an error
        if (!match) return res.status(400).send({ message: "Please check mail and pwd" })
            // else we will create a new token for that user
        const token = newToken(user);
        // console.log("token " + token)
        // we will send the token to the frontend
        return res.status(200).send({ user, token })
            // we will send the token to the frontend
    } catch (e) {
        return res.status(500).send({ message: "Sorry for inconvenience please try again later" })
    }

}

module.exports = {
    register,
    login,
}