import express from "express";
const router = express.Router();

import {
  createShows,
  getAllShows,
  getPastShows,
  updateShow,
  deleteShow,
} from "../controller/showsController.js";

router.route("/").post(createShows).get(getAllShows).get(getPastShows);
router.route("/:id").patch(updateShow).delete(deleteShow);

export default router;
