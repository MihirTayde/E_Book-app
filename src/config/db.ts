import mongoose from "mongoose";
import { config } from "./config";

const connect_db = async () => {
  try {
    // here an important thing to remember  is to declare both the mongoose.connection.on functions before await mongoose.connect, if not done so it will not connect to the database
    mongoose.connection.on("connected", () => {
      console.log("connected to database successfully");
    });

    mongoose.connection.on("error", (err) => {
      console.log("error in connecting to database", err);
    });
    await mongoose.connect(config.database_URL as string);
  } catch (error) {
    console.error("failed to connect to database", error);
  }
};

export default connect_db;