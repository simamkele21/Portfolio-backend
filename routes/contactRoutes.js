const express = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config;

const app = express.Router();

app.post("/", (req, res) => {
  let { name, surname, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: gmail,
    host: smtp.gmail.com,
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: "Simamkelejanuary@gmail.com",
    subject: "New Contact from your portfolio",
    text: `${name} ${surname} has contacted you
      
      Please contact them back on ${email}
      
      ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
      res.send({ msg: "Email has been sent successfully" });
    }
  });
});

module.exports = app;
