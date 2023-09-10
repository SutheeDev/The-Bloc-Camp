import express from "express";
const router = express.Router();
import authenticatedUser from "../middleware/auth.js";
import testUser from "../middleware/testUser.js";
import rateLimit from "express-rate-limit";

import {
  register,
  login,
  updateUser,
  updateUserFavorites,
  getUserFavorites,
} from "../controller/authController.js";

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message:
    "Too many login or register attempts, please try again in 15 minutes.",
});

router.route("/register").post(apiLimiter, register);
router.route("/login").post(apiLimiter, login);
router.route("/updateuser").patch(authenticatedUser, testUser, updateUser);
router.route("/favorites").get(authenticatedUser, getUserFavorites);
router
  .route("/favorites/:id")
  .patch(authenticatedUser, testUser, updateUserFavorites);

export default router;
