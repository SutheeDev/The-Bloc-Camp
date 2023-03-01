const register = async (req, res) => {
  res.send("Register Route");
};
const login = async (req, res) => {
  res.send("Login Route");
};
const updateUser = async (req, res) => {
  res.send("Update User Route");
};
export { register, login, updateUser };
