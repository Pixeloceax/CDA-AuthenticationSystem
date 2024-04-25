import express from "express";
import { userController } from "../controllers/userController";
const router = express.Router();

router.get("/profile", userController);

export default router;
