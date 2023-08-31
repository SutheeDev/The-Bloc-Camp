import nodemailer from "nodemailer";

const sendEmail = async (req, res) => {
  // let testAccount = await nodemailer.createTestAccount();

  // const transporter = nodemailer.createTransport({
  //   host: "smtp.ethereal.email",
  //   port: 587,
  //   auth: {
  //     user: "mitchel13@ethereal.email",
  //     pass: "4NRdmsXnPfRxTNPr93",
  //   },
  // });

  // let info = await transporter.sendMail({
  //   from: ' "Suthee Developer" <test@test.com>',
  //   to: "bar@example.com",
  //   subject: "Hello",
  //   html: "<h2>Sending Email Subscribtion</h2>",
  // });

  // res.json(info);
  res.send("send email !!!");
};

export default sendEmail;
