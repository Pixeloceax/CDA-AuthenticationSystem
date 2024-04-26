import express from "express";
import {
  getUserInformation,
  updateUserInformation,
  deleteUser,
} from "../controllers/userController";
const router = express.Router();

router.get("/profile", getUserInformation);
router.put("/update", updateUserInformation);
router.delete("/delete", deleteUser);

export default router;
