// server.js
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.post("http://localhost:5000/send-email", (req, res) => {
  const { to, subject, message } = req.body;

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
      user: 'markian.dev07@gmail.com',
      pass: 'fmkibwcsnkflfyez'
    },
  });

  // Email data
  const mailOptions = {
    from: "your.email@gmail.com", // Sender email address
    to,
    subject,
    text: message,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Error sending email" });
    } else {
      console.log("Email sent:", info.response);
      res.status(200).json({ message: "Email sent successfully" });
    }
  });
});

// Start the server
const PORT = 3000; // Change this to your preferred port number
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
