const createShow = async (req, res) => {
  res.send("Create Shows Route");
};
const getAllShows = async (req, res) => {
  res.send("Get All Shows Route");
};
const updateShow = async (req, res) => {
  res.send("Update Show Route");
};
const deleteShow = async (req, res) => {
  res.send("Delete Show Route");
};

export { createShow, getAllShows, updateShow, deleteShow };
