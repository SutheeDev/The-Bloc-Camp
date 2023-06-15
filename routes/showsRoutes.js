import express from "express";
const router = express.Router();

import {
  createShow,
  getAllShows,
  updateShow,
  deleteShow,
} from "../controller/showsController.js";
import uploadArtistImage from "../controller/uploadsController.js";

router.route("/").post(createShow).get(getAllShows);
router.route("/uploads").post(uploadArtistImage);
router.route("/:id").patch(updateShow).delete(deleteShow);

export default router;
