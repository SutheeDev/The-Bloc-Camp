import express from "express";
const app = express();

import dotenv from "dotenv";
dotenv.config();

// middleware import
import NotFoundMiddleware from "./middleware/not-found.js";
import ErrorHandlerMiddleware from "./middleware/error-handler.js";

app.get("/", (req, res) => {
  res.send("Hello User");
});

app.use(NotFoundMiddleware);
app.use(ErrorHandlerMiddleware);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port : ${port}...`);
});
