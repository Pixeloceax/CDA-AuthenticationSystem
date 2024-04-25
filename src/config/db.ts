import mongoose from "mongoose";

const connectDB = async () => {
  const MONGO_URI = process.env.MONGO_URI!;
  mongoose.set("strictQuery", false);
  await mongoose.connect(MONGO_URI);
  console.log("MongoDb Connected");
};

export default connectDB;
