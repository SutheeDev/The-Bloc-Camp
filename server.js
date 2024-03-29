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
import cookieParser from "cookie-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

// security packages
import helmet from "helmet";
import xss from "xss-clean";
import mongoSanitize from "express-mongo-sanitize";

// Routes
import authRouter from "./routes/authRoutes.js";
import showRouter from "./routes/showsRoutes.js";
import sendEmailRouter from "./routes/sendEmailRoutes.js";

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

const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.resolve(__dirname, "./client/build")));
// Built-in middleware
app.use(express.json());
app.use(cookieParser());
// Invoke security packages
// set up CSP policy to allow images from Cloudinary
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: [" 'self' "],
      imgSrc: [" 'self' ", "https://res.cloudinary.com"],
    },
  })
);
app.use(xss());
app.use(mongoSanitize());
// Invoke express-fileupload
app.use(fileUpload({ useTempFiles: true }));

// API routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/shows", showRouter);
app.use("/api/v1/email", sendEmailRouter);

// direct routes to index.html
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

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
