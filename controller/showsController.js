import Show from "../models/Show.js";
import {
  BadRequestError,
  NotFoundError,
  UnauthenticatedError,
} from "../errors/index.js";
import { StatusCodes } from "http-status-codes";
import checkPermission from "../utils/checkPermission.js";
import mongoose from "mongoose";

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

  checkPermission(req.user);

  const updatedShow = await Show.findOneAndUpdate({ _id: showId }, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(StatusCodes.OK).json({ updatedShow });
};

const deleteShow = async (req, res) => {
  const { id: showId } = req.params;

  const show = await Show.findOne({ _id: showId });
  if (!show) {
    throw new NotFoundError(`no show with id: ${showId}`);
  }

  checkPermission(req.user);

  await show.deleteOne();

  res
    .status(StatusCodes.OK)
    .json({ msg: `the ${show.artist} show has been removed` });
};

const showOverview = async (req, res) => {
  let overview = await Show.aggregate([
    { $group: { _id: "$status", count: { $sum: 1 } } },
  ]);

  overview = overview.reduce((acc, curr) => {
    const { _id: title, count } = curr;
    acc[title] = count;
    return acc;
  }, {});

  const defaultOverview = {
    upcoming: overview.upcoming || 0,
    canceled: overview.canceled || 0,
    soldout: overview.soldout || 0,
  };

  const monthlyApplication = [];

  res.status(StatusCodes.OK).json({ defaultOverview, monthlyApplication });
};

export { createShow, getAllShows, updateShow, deleteShow, showOverview };
