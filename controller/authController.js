import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError } from "../errors/index.js";

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

  const user = User.findOne({ email });

  if (!user) {
    // create 401 and throw it here
    throw new BadRequestError("Invalid email or password");
  }
  // Compare the password here

  // If password doesn't match, throw 401 here.
};

const updateUser = async (req, res) => {
  res.send("Update User Route");
};
export { register, login, updateUser };
