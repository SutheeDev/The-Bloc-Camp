import express from "express";
const router = express.Router();
import authenticatedUser from "../middleware/auth.js";

import {
  register,
  login,
  updateUser,
  updateFavorites,
} from "../controller/authController.js";

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/updateuser").patch(authenticatedUser, updateUser);
router.route("/favorites/:id").patch(authenticatedUser, updateFavorites);

export default router;
