import Show from "../models/Show.js";
import {
  BadRequestError,
  NotFoundError,
  UnauthenticatedError,
} from "../errors/index.js";
import { StatusCodes } from "http-status-codes";

const createShow = async (req, res) => {
  const { artist, performDate, performTime } = req.body;

  if (!artist || !performDate || !performTime) {
    throw new BadRequestError("Please provide all required fields!");
  }

  req.body.createdBy = req.user.userId;

  const show = await Show.create(req.body);

  console.log(show);
  res.status(StatusCodes.CREATED).json({ show });
};

const getAllShows = async (req, res) => {
  const shows = await Show.find({});
  res.status(StatusCodes.OK).json({ shows });
};

const updateShow = async (req, res) => {
  res.send("Update Show Route");
};
const deleteShow = async (req, res) => {
  res.send("Delete Show Route");
};

export { createShow, getAllShows, updateShow, deleteShow };
