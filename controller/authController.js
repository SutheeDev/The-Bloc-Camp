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
      phoneNumber: user.phoneNumber,
      location: user.location,
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
  const { name, lastname } = req.body;

  if (!name || !lastname) {
    throw new BadRequestError("Please provide all values!");
  }

  const user = await User.findOne({ _id: req.user.userId });
  user.name = name;
  user.lastname = lastname;

  await user.save();

  const token = user.createJWT();

  res.send("Update User Route");
};
export { register, login, updateUser };
