import path from "path";
import { StatusCodes } from "http-status-codes";

const uploadArtistImage = async (req, res) => {
  const artistImage = req.files.artistImage;
  res.send("upload artist image");
};

export default uploadArtistImage;
