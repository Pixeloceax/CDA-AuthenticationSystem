import { Request, Response } from "express";
import isset from "../utils/isset";

const userModel = require("../models/userModel");

export const getUserInformation = async (req: Request, res: Response) => {
  try {
    const user = await userModel.findOne({ _id: req.user });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    throw new Error(`GET USER ERROR : ${error}`);
  }
};

export const updateUserInformation = async (req: Request, res: Response) => {
  try {
    const user = await userModel.findOne({ _id: req.user });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (isset(req.body)) {
      Object.keys(req.body).forEach((key) => {
        if (isset(req.body[key]) && isset(user[key])) {
          user[key] = req.body[key];
        }
      });
    }

    await user.save();

    res.status(200).json("User updated");
  } catch (error) {
    throw new Error(`UPDATE USER ERROR : ${error}`);
  }
};
