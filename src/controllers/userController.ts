import { Request, Response } from "express";

const userModel = require("../models/userModel");

export const userController = async (req: Request, res: Response) => {
  try {
    const user = await userModel.findOne({ _id: req.user });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    throw new Error(`USER ERROR : ${error}`);
  }
};
