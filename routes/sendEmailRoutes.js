import express from "express";
const router = express.Router();

import sendEmailBrevo from "../controller/sendEmailController.js";

router.route("/subscribe").post(sendEmailBrevo);

export default router;
