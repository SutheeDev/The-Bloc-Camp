import mongoose from "mongoose";
import moment from "moment";

const ShowSchema = new mongoose.Schema(
  {
    artist: {
      type: String,
      trim: true,
      required: [true, "Please provide the artist name"],
    },
    performDate: {
      type: Date,
      required: [true, "Please provide the performance date"],
    },
    performTime: {
      type: Date,
      required: [true, "Please provide the show start time"],
    },
    performDateTime: {
      type: Date,
      requred: true,
    },
    artistInfo: {
      type: String,
      maxlength: [
        500,
        "Artist description can't be longer than 500 characters",
      ],
      default: "",
    },
    ticketsPrice: {
      type: Number,
      default: 50,
    },
    artistImage: {
      type: String,
      default:
        "https://res.cloudinary.com/dnc7potxo/image/upload/v1686913117/the-bloc-camp/artist-image/tmp-1-1686913115687_fad0kg.png",
    },
    featureImage: {
      type: String,
      default:
        "https://res.cloudinary.com/dnc7potxo/image/upload/v1686927431/the-bloc-camp/feature-image/tmp-1-1686927429423_xgrkwk.png",
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide the user"],
    },
    isPublished: {
      type: Boolean,
      default: false,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      enum: ["upcoming", "canceled", "sold out"],
      default: "upcoming",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Show", ShowSchema);
