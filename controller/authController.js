import User from "../models/User.js";

const register = async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json({ user });
};

const login = async (req, res) => {
  res.send("Login Route");
};
const updateUser = async (req, res) => {
  res.send("Update User Route");
};
export { register, login, updateUser };
