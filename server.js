import express from "express";
const app = express();

import dotenv from "dotenv";
dotenv.config();

// Routes
import authRouter from "./routes/authRoutes.js";

// middleware import
import NotFoundMiddleware from "./middleware/not-found.js";
import ErrorHandlerMiddleware from "./middleware/error-handler.js";

// connect to database function
import connectDB from "./db/connect.js";

// Built-in middleware
app.use(express.json());

// API routes
app.use("/api/v1/auth", authRouter);

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
