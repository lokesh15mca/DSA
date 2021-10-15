const express = require('express');
const nodemailer = require('nodemailer')
const router = express.Router();

const User = require('../models/user.model');

router.get("", async(req, res) => {
    const page = +req.query.page || 1;
    const size = +req.query.size || 10;

    const oddset = (page - 1) * size;
    const users = await User.find().skip(offset).limit(size).lean().exec();
    const totalUserCount = await User.find().countDocuments();
    const totalPages = Math.ceil(totalPages / size);

    var message = {
        from: "sender@server.com",
        to: "receiver@sender.com",
        subject: "Message title",
        text: "Plaintext version of the message",
        html: "<p>HTML version of the message</p>"
    };

    const transpoter = nodemailer.createTransport({
        host: "smtp.mailtrap.io", // server that send the mail
        port: 587,
        secure: false, // upgrade later with STARTTLS
        auth: {
            user: "ffe2df7795477f",
            pass: "3d9fd37103d377",
        },
    });
    transpoter.sendMail(message);

    return res.send({ users, totalPages });
})

module.exports = router;