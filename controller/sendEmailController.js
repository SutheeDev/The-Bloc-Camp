import { StatusCodes } from "http-status-codes";
import { BadRequestError } from "../errors/index.js";
import brevoApi from "sib-api-v3-sdk";

const sendEmailBrevo = async (req, res) => {
  const { subscribeEmail } = req.body;

  if (!subscribeEmail) {
    throw new BadRequestError("Please provide your email address");
  }

  const client = brevoApi.ApiClient.instance;

  const apiKey = client.authentications["api-key"];
  apiKey.apiKey = process.env.BREVO_API_KEY;

  const apiInstance = new brevoApi.TransactionalEmailsApi();

  const sender = {
    email: process.env.SENDER_EMAIL,
    name: "SutheeDev",
  };

  const receivers = [
    {
      email: subscribeEmail,
    },
  ];

  const data = await apiInstance.sendTransacEmail({
    sender,
    to: receivers,
    templateId: 1,
    subject: "Thanks for subscribing!",
  });

  res.status(StatusCodes.OK).json({ data });
};

export default sendEmailBrevo;
