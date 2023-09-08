import nodemailer from "nodemailer";
import { StatusCodes } from "http-status-codes";
import { BadRequestError } from "../errors/index.js";

const sendEmailEthereal = async (req, res) => {
  const { subscribeEmail } = req.body;

  if (!subscribeEmail) {
    throw new BadRequestError("Please provide your email address");
  }

  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email", // put this in the .env / swap this in the production
    port: 587,
    auth: {
      user: "edwin.balistreri@ethereal.email",
      pass: "bUWKvuApCex7Vm2S3U",
    },
  });

  let info = await transporter.sendMail({
    from: ' "SutheeDeveloper" <test@test.com>',
    to: subscribeEmail,
    subject: "Thanks for subscribing!",
    html: "<h2>Sending Email Subscribtion</h2>",
  });

  res.status(StatusCodes.OK).json({ info });
};

export default sendEmailEthereal;
