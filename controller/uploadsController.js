import path from "path";
import { StatusCodes } from "http-status-codes";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import { BadRequestError } from "../errors/index.js";

const uploadArtistImage = async (req, res) => {
  // if (!req.files) {
  //   throw new BadRequestError("no file uploaded!");
  // }

  const artistImage = req.files.image;
  if (!artistImage.mimetype.startsWith("image")) {
    throw new BadRequestError("please upload image");
  }

  const maxSize = 3 * (1024 * 1024);
  if (artistImage.size > maxSize) {
    throw new BadRequestError("please upload image smaller than 3 Megabytes");
  }

  const result = await cloudinary.uploader.upload(
    req.files.image.tempFilePath,
    {
      use_filename: true,
      folder: "the-bloc-camp/artist-image",
      width: 426,
      height: 426,
      crop: "fill",
    }
  );
  // Remove copied file from the temp folder
  fs.unlinkSync(req.files.image.tempFilePath);
  res.status(StatusCodes.OK).json({ image: { src: result.secure_url } });
};

const uploadFeatureImage = async (req, res) => {
  const featureImage = req.files.image;
  if (!featureImage.mimetype.startsWith("image")) {
    throw new BadRequestError("please upload image");
  }

  const maxSize = 3 * (1024 * 1024);
  if (featureImage.size > maxSize) {
    throw new BadRequestError("please upload image smaller than 3 Megabytes");
  }

  const result = await cloudinary.uploader.upload(
    req.files.image.tempFilePath,
    {
      use_filename: true,
      folder: "the-bloc-camp/feature-image",
      width: 640,
      height: 360,
      crop: "fill",
    }
  );

  fs.unlinkSync(req.files.image.tempFilePath);
  res.status(StatusCodes.OK).json({ image: { src: result.secure_url } });
};

export { uploadArtistImage, uploadFeatureImage };
