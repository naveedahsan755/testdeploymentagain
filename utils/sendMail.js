const nodemailer = require("nodemailer");

const sendEmail = async (to, subject, body) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.TEMP_EMAIL,
      pass: process.env.TEMP_MAILPASS,
    },
  });

  let mailOptions = {
    from: process.env.TEMP_EMAIL,
    to: to,
    subject: subject,
    html: body,
  };

  await transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      console.log("Error occured");
    }
  });
};

module.exports = sendEmail;
