import express from "express";
const router = express.Router();

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

router.route("/").post(createShow).get(getAllShows);
router.route("/overview").get(showOverview);
router.route("/uploads-artistImage").post(uploadArtistImage);
router.route("/uploads-featureImage").post(uploadFeatureImage);
router.route("/:id").patch(updateShow).delete(deleteShow);

export default router;
