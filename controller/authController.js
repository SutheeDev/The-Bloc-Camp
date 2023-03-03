import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError } from "../errors/index.js";

const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new BadRequestError("Please provide all values");
  }

  const duplicatedEmail = await User.findOne({ email });
  if (duplicatedEmail) {
    throw new BadRequestError("This email has already been taken");
  }

  const user = await User.create({ name, email, password });

  const token = user.createJWT();

  res.status(StatusCodes.CREATED).json({ user, token });
};

const login = async (req, res) => {
  res.send("Login Route");
};
const updateUser = async (req, res) => {
  res.send("Update User Route");
};
export { register, login, updateUser };
