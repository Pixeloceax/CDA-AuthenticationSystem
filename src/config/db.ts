import mongoose from "mongoose";

export const connectDB = async () => {
  const MONGO_URI = process.env.MONGO_URI!;
  mongoose.set("strictQuery", false);
  await mongoose.connect(MONGO_URI);
  console.log("MongoDb Connected");
};
