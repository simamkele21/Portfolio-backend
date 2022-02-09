const express = require("express");

const app = express.Router();

app.post("/", (req, res) => {
  let { name, surname, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "Simamkelejanuary@gmail.com",
      pass: "Boxing@19",
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
