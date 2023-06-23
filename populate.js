import { readFile } from "fs/promises";

import dotenv from "dotenv";
dotenv.config();

import connectDB from "./db/connect.js";
import Show from "./models/Show.js";

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Show.deleteMany();
    const jsonProducts = JSON.parse(
      await readFile(new URL("./mock-data.json", import.meta.url))
    );
    await Show.create(jsonProducts);
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
