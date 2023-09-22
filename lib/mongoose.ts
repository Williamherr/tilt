import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);
  console.log("conneccting to database");
  if (!process.env.MONGODB_URL) return console.log("MONGODB_URL not found");
  if (isConnected) return console.log("Already connected to database");
    await mongoose.connect(process.env.MONGODB_URL);
    isConnected = true;
    console.log("Connected to database");
  try {
  } catch (error) {
    console.log("connection error: " + error);
  }
};
