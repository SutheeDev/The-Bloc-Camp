import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, UnauthenticatedError } from "../errors/index.js";

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

  res.status(StatusCodes.CREATED).json({
    user: {
      name: user.name,
      email: user.email,
      lastname: user.lastname,
      favorites: user.favorites,
      location: user.location,
      role: user.role,
    },
    token,
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

  // Set password to undefined so it's not visible in the response
  user.password = undefined;
  res.status(StatusCodes.OK).json({ user, token, role: user.role });
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

  res.status(StatusCodes.OK).json({ user, token, role: user.role });
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

  res
    .status(StatusCodes.OK)
    .json({ user, token, role: user.role, favorites: user.favorites });
};

const getUserFavorites = async (req, res) => {
  const user = await User.findOne({ _id: req.user.userId });
  res.status(StatusCodes.OK).json({ favorites: user.favorites });
};

export { register, login, updateUser, updateUserFavorites, getUserFavorites };
