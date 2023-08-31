import express from "express";
const router = express.Router();

import sendEmail from "../controller/sendEmailController.js";

router.route("/subscribe").post(sendEmail);
