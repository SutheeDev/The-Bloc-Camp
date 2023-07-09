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
  const shows = await Show.find({ status: "upcoming" }).sort("performDateTime");
  res
    .status(StatusCodes.OK)
    .json({ shows, totalShows: shows.length, numOfPages: 1 });
};

const updateShow = async (req, res) => {
  const { id: showId } = req.params;

  const { artist, performDate, performTime, artistImage, featureImage } =
    req.body;

  if (
    !artist ||
    !performDate ||
    !performTime ||
    !artistImage ||
    !featureImage
  ) {
    throw new BadRequestError("Please provide all required fields!");
  }

  const show = await Show.findOne({ _id: showId });
  if (!show) {
    throw new NotFoundError(`no show with id: ${showId}`);
  }

  const updatedShow = await Show.findOneAndUpdate({ _id: showId }, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(StatusCodes.OK).json({ updatedShow });
};

const deleteShow = async (req, res) => {
  res.send("Delete Show Route");
};

export { createShow, getAllShows, updateShow, deleteShow };
