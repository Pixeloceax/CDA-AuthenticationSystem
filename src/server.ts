require("dotenv").config({ path: "./config.env" });

import express from "express";
import cors from "cors";

import connectDB from "./config/db";

import errorHandler from "./middlewares/errorMiddleware";
import verifyToken from "./middlewares/authMiddleware";

import authRoutes from "./routes/authRoutes";
import userRoutes from "./routes/userRoutes";

const app = express();
const PORT = process.env.PORT!;
const CORS_ALLOW_ORIGIN = process.env.CORS_ALLOW_ORIGIN;
const corsOptions = {
  origin: CORS_ALLOW_ORIGIN!,
  optionsSuccessStatus: 200,
};

connectDB();

app.use(express.json());
app.use(cors(corsOptions));

app.use("/auth", authRoutes);
app.use("/user", verifyToken, userRoutes);

app.use(errorHandler);

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
process.on("unhandledRejection", (error, _promise) => {
  console.log(`Logged Error: ${error}`);
  server.close(() => process.exit(1));
});
