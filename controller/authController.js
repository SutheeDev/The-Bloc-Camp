import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, UnauthenticatedError } from "../errors/index.js";
import attachCookies from "../utils/attachCookies.js";

const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new BadRequestError("Please provide all values!");
  }

  const duplicatedEmail = await User.findOne({ email });
  if (duplicatedEmail) {
    throw new BadRequestError("This email has already been taken!");
  }

  const user = await User.create({ name, email, password });

  const token = user.createJWT();

  attachCookies({ res, token });

  res.status(StatusCodes.CREATED).json({
    user: {
      name: user.name,
      email: user.email,
      lastname: user.lastname,
      favorites: user.favorites,
      location: user.location,
      role: user.role,
    },
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError("Please provide all values!");
  }

  // Find the user from input email and get the password too
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    throw new UnauthenticatedError("Invalid email or password");
  }

  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError("Invalid email or password");
  }

  const token = user.createJWT();

  attachCookies({ res, token });

  // Set password to undefined so it's not visible in the response
  user.password = undefined;
  res.status(StatusCodes.OK).json({ user, role: user.role });
};

const updateUser = async (req, res) => {
  const { name, lastname, email, location } = req.body;

  if (!name || !lastname || !email || !location) {
    throw new BadRequestError("Please provide all values!");
  }

  const user = await User.findOne({ _id: req.user.userId });
  user.name = name;
  user.lastname = lastname;
  user.email = email;
  user.location = location;

  await user.save();

  const token = user.createJWT();

  attachCookies({ res, token });

  res.status(StatusCodes.OK).json({ user, role: user.role });
};

const updateUserFavorites = async (req, res) => {
  const { id: showId } = req.params;

  const user = await User.findOne({ _id: req.user.userId });
  let favList = user.favorites;
  if (favList.includes(showId)) {
    user.favorites = favList.filter((item) => item !== showId);
  } else {
    user.favorites = [...favList, showId];
  }

  await user.save();

  const token = user.createJWT();

  attachCookies({ res, token });

  res
    .status(StatusCodes.OK)
    .json({ user, role: user.role, favorites: user.favorites });
};

const getUserFavorites = async (req, res) => {
  const user = await User.findOne({ _id: req.user.userId });
  res.status(StatusCodes.OK).json({ favorites: user.favorites });
};

const getCurrentUser = async (req, res) => {
  const user = await User.findOne({ _id: req.user.userId });
  res.status(StatusCodes.OK).json({ user, role: user.role });
};

const logout = async (req, res) => {
  res.cookie("token", "logout", {
    httpOnly: true,
    expires: new Date(Date.now()),
  });

  res.status(StatusCodes.OK).json({ msg: "user logged out" });
};

export {
  register,
  login,
  updateUser,
  updateUserFavorites,
  getUserFavorites,
  getCurrentUser,
  logout,
};
