import express from "express";
import {
  getUserInformation,
  updateUserInformation,
} from "../controllers/userController";
const router = express.Router();

router.get("/profile", getUserInformation);
router.put("/update", updateUserInformation);

export default router;
