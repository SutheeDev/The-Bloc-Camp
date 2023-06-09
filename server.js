import express from "express";
const app = express();

import dotenv from "dotenv";
dotenv.config();

import "express-async-errors";
import morgan from "morgan";

// Routes
import authRouter from "./routes/authRoutes.js";
import showRouter from "./routes/showsRoutes.js";

// middleware import
import NotFoundMiddleware from "./middleware/not-found.js";
import ErrorHandlerMiddleware from "./middleware/error-handler.js";

// connect to database function
import connectDB from "./db/connect.js";

// Invoke Morgan
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

// Built-in middleware
app.use(express.json());

// API routes
app.use("/api/v1/auth", authRouter);
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
