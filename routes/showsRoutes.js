import express from "express";
const router = express.Router();
import authenticatedUser from "../middleware/auth.js";

import {
  createShow,
  getAllShows,
  updateShow,
  deleteShow,
  showOverview,
} from "../controller/showsController.js";
import {
  uploadArtistImage,
  uploadFeatureImage,
} from "../controller/uploadsController.js";

router
  .route("/")
  .post(authenticatedUser, createShow)
  .get(authenticatedUser, getAllShows);
router.route("/overview").get(authenticatedUser, showOverview);
router.route("/uploads-artistImage").post(authenticatedUser, uploadArtistImage);
router
  .route("/uploads-featureImage")
  .post(authenticatedUser, uploadFeatureImage);
router
  .route("/:id")
  .patch(authenticatedUser, updateShow)
  .delete(authenticatedUser, deleteShow);

export default router;
