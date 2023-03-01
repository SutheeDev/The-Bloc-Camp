import express from "express";
const app = express();

// middleware import
import NotFoundMiddleware from "./middleware/not-found.js";

app.use(NotFoundMiddleware);

app.get("/", (req, res) => {
  res.send("Hello User");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port : ${port}...`);
});
