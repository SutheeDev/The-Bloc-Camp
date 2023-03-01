import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    minlength: [2, "Name cannot be less than 2 characters"],
    maxlength: [20, "Name cannot be longer than 20 characters"],
    required: [true, "Please provide your name"],
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
    minlength: 6,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  lastname: {
    type: String,
    trim: true,
    minlength: [2, "Lastname cannot be less than 2 characters"],
    maxlength: [50, "Lastname cannot be longer than 50 characters"],
    default: "Lastname",
  },
  phoneNumber: {
    type: Number,
    default: Null,
  },
  location: {
    type: String,
    default: Null,
  },
});

export default mongoose.model("User", UserSchema);
