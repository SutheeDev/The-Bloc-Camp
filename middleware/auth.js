import { UnauthenticatedError } from "../errors/index.js";
import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    throw new UnauthenticatedError("Authentication Invalid");
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const testUser = payload.userId === "64e219e1f99df9e1e9cc68bb";
    const testAdmin = payload.userId === "64e21a91f99df9e1e9cc68d9";
    req.user = {
      userId: payload.userId,
      role: payload.role,
      testUser,
      testAdmin,
    };
    next();
  } catch (error) {
    throw new UnauthenticatedError("Authentication Invalid");
  }
};

export default auth;
