import Show from "../models/Show.js";
import User from "../models/User.js";
import {
  BadRequestError,
  NotFoundError,
  UnauthenticatedError,
} from "../errors/index.js";
import { StatusCodes } from "http-status-codes";
import checkPermission from "../utils/checkPermission.js";
import mongoose from "mongoose";
import moment from "moment";

const createShow = async (req, res) => {
  const { artist, performDate, performTime } = req.body;

  if (!artist || !performDate || !performTime) {
    throw new BadRequestError("Please provide all required fields!");
  }

  req.body.createdBy = req.user.userId;

  const show = await Show.create(req.body);

  res.status(StatusCodes.CREATED).json({ show });
};

const getAllShows = async (req, res) => {
  const { search, status, sort } = req.query;

  const queryObject = {};

  if (search) {
    queryObject.artist = { $regex: search, $options: "i" };
  }
  if (status && status !== "all") {
    queryObject.status = status;
  }

  // const shows = await Show.find({ status: "upcoming" }).sort("performDateTime");
  let result = Show.find(queryObject);

  if (sort === "by date") {
    result = result.sort("performDateTime");
  }
  if (sort === "reverse date") {
    result = result.sort("-performDateTime");
  }
  if (sort === "a-z") {
    result = result.sort("artist");
  }
  if (sort === "z-a") {
    result = result.sort("-artist");
  }

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  result = result.skip(skip).limit(limit);

  const shows = await result;
  const totalShows = await Show.countDocuments(queryObject);
  const numOfPages = Math.ceil(totalShows / limit);

  res.status(StatusCodes.OK).json({ shows, totalShows, numOfPages });
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

  // const monthlyApplication = [];
  let monthlyApplication = await Show.aggregate([
    {
      $group: {
        _id: {
          year: { $year: "$performDateTime" },
          month: { $month: "$performDateTime" },
        },
        count: { $sum: 1 },
      },
    },
    { $sort: { "_id.year": -1, "_id.month": -1 } },
    { $limit: 6 },
  ]);

  monthlyApplication = monthlyApplication
    .map((item) => {
      const {
        _id: { year, month },
        count,
      } = item;
      const date = moment()
        .month(month - 1)
        .year(year)
        .format("MMM Y");
      return { date, count };
    })
    .reverse();

  res.status(StatusCodes.OK).json({ defaultOverview, monthlyApplication });
};

const getPublishedShows = async (req, res) => {
  let result = Show.find({ isPublished: true }).sort("performDateTime");

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 12;
  const skip = (page - 1) * limit;
  result = result.skip(skip).limit(limit);

  const shows = await result;
  const totalShows = await Show.countDocuments({ isPublished: true });
  const numOfPages = Math.ceil(totalShows / limit);

  res.status(StatusCodes.OK).json({ shows, totalShows, numOfPages });
};

const getFeaturedShows = async (req, res) => {
  const shows = await Show.find({ isFeatured: true }).sort("performDateTime");
  res.status(StatusCodes.OK).json({ shows });
};

const getUpcomingShows = async (req, res) => {
  const { search, status, sort } = req.query;

  const queryObject = {
    status: "upcoming",
  };

  if (search) {
    queryObject.artist = { $regex: search, $options: "i" };
  }
  if (status && status !== "all") {
    queryObject.status = status;
  }

  let result = Show.find(queryObject);

  if (sort === "by date") {
    result = result.sort("performDateTime");
  }
  if (sort === "reverse date") {
    result = result.sort("-performDateTime");
  }
  if (sort === "a-z") {
    result = result.sort("artist");
  }
  if (sort === "z-a") {
    result = result.sort("-artist");
  }

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  result = result.skip(skip).limit(limit);

  const shows = await result;
  const totalShows = await Show.countDocuments(queryObject);
  const numOfPages = Math.ceil(totalShows / limit);

  res.status(StatusCodes.OK).json({ shows, totalShows, numOfPages });
};

const getFavoriteShows = async (req, res) => {
  const user = await User.findOne({ _id: req.user.userId });
  const favList = user.favorites;

  const allUpcoming = await Show.find({ status: "upcoming" });

  let shows = [];
  favList.forEach((favId) => {
    const favObjectId = new mongoose.Types.ObjectId(favId);
    const favItem = allUpcoming.find((item) => item._id.equals(favObjectId));
    if (favItem) {
      shows.push(favItem);
    }
  });
  shows.sort((a, b) => a.performDateTime - b.performDateTime);

  res.status(StatusCodes.OK).json({ shows });
};

const getArtist = async (req, res) => {
  const { id: showId } = req.params;

  const show = await Show.findOne({ _id: showId });

  res.status(StatusCodes.OK).json({ show });
};

export {
  createShow,
  getAllShows,
  updateShow,
  deleteShow,
  showOverview,
  getPublishedShows,
  getFeaturedShows,
  getUpcomingShows,
  getFavoriteShows,
  getArtist,
};
