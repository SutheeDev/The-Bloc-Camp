import express from "express";
const router = express.Router();
import authenticatedUser from "../middleware/auth.js";

import {
  register,
  login,
  updateUser,
  updateUserFavorites,
} from "../controller/authController.js";

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/updateuser").patch(authenticatedUser, updateUser);
router.route("/favorites/:id").patch(authenticatedUser, updateUserFavorites);

export default router;
