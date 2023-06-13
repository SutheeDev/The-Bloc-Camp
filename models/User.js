import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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
    validate: {
      validator: validator.isEmail,
      message: "Please provide valid email",
    },
    unique: [true, "This email has already been in use"],
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
    minlength: 6,
    select: false,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  lastname: {
    type: String,
    trim: true,
    // minlength: [2, "Lastname cannot be less than 2 characters"],
    maxlength: [50, "Lastname cannot be longer than 50 characters"],
    default: "",
  },
  phoneNumber: {
    type: String,
    default: null,
  },
  location: {
    type: String,
    default: "",
  },
});

UserSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.createJWT = function () {
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
};

UserSchema.methods.comparePassword = async function (givenPassword) {
  const isMatch = await bcrypt.compare(givenPassword, this.password);
  return isMatch;
};

export default mongoose.model("User", UserSchema);
