import mongoose from "mongoose";

const ShowSchema = new mongoose.Schema(
  {
    artist: {
      type: String,
      trim: true,
      required: [true, "Please provide the artist name"],
    },
    performDate: {
      type: Date,
      min: Date.now,
      required: [true, "Please provide the performance date"],
    },
    performTime: {
      type: Date,
      min: Date.now,
      required: [true, "Please provide the show start time"],
    },
    artistInfo: {
      type: String,
      maxlength: [
        500,
        "Artist description can't be longer than 500 characters",
      ],
      default: "",
    },
    smallImg: {
      type: String,
      default: "",
    },
    bigImg: {
      type: String,
      default: "",
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide the user"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Show", ShowSchema);
