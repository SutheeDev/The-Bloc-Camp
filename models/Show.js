import mongoose from "mongoose";

const ShowSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Please provide the artist name"],
    },
    performDate: {
      type: Date,
      min: Date.now,
      required: [true, "Please provide the perform date"],
    },
    performTime: {
      type: Date,
      min: Date.now,
      required: [true, "Please provide the show start time"],
    },
    artistInfo: {
      type: String,
      maxlength: [500, "description can't be longer than 500 characters"],
    },
    smallImg: {
      type: String,
      default: "",
    },
    bigImg: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Show", ShowSchema);
