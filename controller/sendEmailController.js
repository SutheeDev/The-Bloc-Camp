import nodemailer from "nodemailer";
import { StatusCodes } from "http-status-codes";
import { BadRequestError } from "../errors/index.js";

const sendEmail = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    throw new BadRequestError("Please provide your email address");
  }

  // let testAccount = await nodemailer.createTestAccount();

  // const transporter = nodemailer.createTransport({
  //   host: "smtp.ethereal.email", // put this in the .env / swap this in the production
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

  // res.json(email);
  res.status(StatusCodes.OK).json({ email });
};

export default sendEmail;
