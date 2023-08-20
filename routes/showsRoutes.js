import express from "express";
const router = express.Router();
import authenticatedUser from "../middleware/auth.js";
import testUser from "../middleware/testUser.js";

import {
  createShow,
  getAllShows,
  updateShow,
  deleteShow,
  showOverview,
  getPublishedShows,
  getFeaturedShows,
  getUpcomingShows,
  getFavoriteShows,
} from "../controller/showsController.js";
import {
  uploadArtistImage,
  uploadFeatureImage,
} from "../controller/uploadsController.js";

router
  .route("/")
  .post(authenticatedUser, testUser, createShow)
  .get(authenticatedUser, getAllShows);
router.route("/published").get(getPublishedShows);
router.route("/featured").get(getFeaturedShows);
router.route("/upcoming").get(authenticatedUser, getUpcomingShows);
router.route("/overview").get(authenticatedUser, showOverview);
router.route("/favorites").get(authenticatedUser, getFavoriteShows);
router
  .route("/uploads-artistImage")
  .post(authenticatedUser, testUser, uploadArtistImage);
router
  .route("/uploads-featureImage")
  .post(authenticatedUser, testUser, uploadFeatureImage);
router
  .route("/:id")
  .patch(authenticatedUser, testUser, updateShow)
  .delete(authenticatedUser, testUser, deleteShow);

export default router;
