// @ts-ignore
import mongoose from "mongoose";
import { mongoUrl } from "../src/config";

export const initMongo = () =>
  mongoose
    .connect(mongoUrl, {
      // useNewUrlParser: true,
      // useCreateIndex: true,
      // useUnifiedTopology: true,
    })
    .then(() => {
      console.log("✅  Connected to MongoDB");
      /** ready to use. The `mongoose.connect()` promise resolves to undefined. */
    })
    .catch((err) => {
      console.log(
        `❌  MongoDB connection error. Please make sure MongoDB is running. ${err}`
      );
      // process.exit();
    });
