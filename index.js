const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
  res.send('/index.html');
});

app.post("/api/forma", (req, res) => {
  let data = req.body;
  let smtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    port: 465,
    auth: {
      user: 'markian.dev07@gmail.com',
      pass: 'fmkibwcsnkflfyez'
    },
  });

  let mailOptions = {
    from: data.email,
    to: 'markian.dev07@gmail.com',
    subject: `Message from ${data.name}`,
    html: `
    <h3>Information</h3>
    <ul>
      <li>Name: ${data.name}</li>
      <li>Email: ${data.email}</li>
    </ul>

    <h2>Message</h2>
    <p>${data.message}</p>
    `
  };

  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      console.error(error);
      res.send('Error');
    } else {
      console.log('Email sent:', response);
      res.send('Success');
    }
  });

  smtpTransport.close();
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
