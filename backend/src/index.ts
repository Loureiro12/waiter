import path from "node:path";

import express from "express";
import mongoose from "mongoose";
import { router } from "./app/router";

mongoose
  .connect("mongodb://localhost:27017/test")
  .then(() => {
    const app = express();
    const port = 3001;

    app.use(
      "/uploads",
      express.static(path.resolve(__dirname, "..", "uploads"))
    );
    app.use(express.json());
    app.use(router);

    app.listen(3001, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => console.log("error  ao conectar ao mongo", err));
