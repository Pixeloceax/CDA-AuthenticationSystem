import express from "express";
import { getUserInformation } from "../controllers/userController";
const router = express.Router();

router.get("/profile", getUserInformation);

export default router;
