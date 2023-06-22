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
    TicketPrice: {
      type: Number,
      default: 45,
    },
    smallImg: {
      type: String,
      default:
        "https://res.cloudinary.com/dnc7potxo/image/upload/v1686913117/the-bloc-camp/artist-image/tmp-1-1686913115687_fad0kg.png",
    },
    bigImg: {
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
  },
  { timestamps: true }
);

export default mongoose.model("Show", ShowSchema);
