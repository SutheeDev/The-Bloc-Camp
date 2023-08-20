import express from "express";
const router = express.Router();
import authenticatedUser from "../middleware/auth.js";
import testUser from "../middleware/testUser.js";

import {
  register,
  login,
  updateUser,
  updateUserFavorites,
  getUserFavorites,
} from "../controller/authController.js";

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/updateuser").patch(authenticatedUser, testUser, updateUser);
router.route("/favorites").get(authenticatedUser, getUserFavorites);
router
  .route("/favorites/:id")
  .patch(authenticatedUser, testUser, updateUserFavorites);

export default router;
