import express from "express";
const app = express();

import dotenv from "dotenv";
dotenv.config();

// Others import
import "express-async-errors";
import morgan from "morgan";
import fileUpload from "express-fileupload";
import { v2 as cloudinary } from "cloudinary";
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// Routes
import authRouter from "./routes/authRoutes.js";
import showRouter from "./routes/showsRoutes.js";

// middleware import
import NotFoundMiddleware from "./middleware/not-found.js";
import ErrorHandlerMiddleware from "./middleware/error-handler.js";
// import authenticatedUser from "./middleware/auth.js";

// connect to database function
import connectDB from "./db/connect.js";

// Invoke Morgan
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

// Built-in middleware
app.use(express.json());
// Invoke express-fileupload
app.use(fileUpload({ useTempFiles: true }));

// API routes
app.use("/api/v1/auth", authRouter);
// app.use("/api/v1/shows", authenticatedUser, showRouter);
app.use("/api/v1/shows", showRouter);

app.get("/", (req, res) => {
  res.send("Hello User");
});

app.use(NotFoundMiddleware);
app.use(ErrorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server running on port : ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
