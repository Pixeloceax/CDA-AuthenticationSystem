import { Request, Response } from "express";
import isSet from "../utils/isSet";

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

    if (isSet(req.body)) {
      Object.keys(req.body).forEach((key) => {
        if (isSet(req.body[key]) && isSet(user[key])) {
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

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const user = await userModel.findOne({ _id: req.user });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    await user.deleteOne();

    res.status(200).json("User deleted");
  } catch (error) {
    throw new Error(`DELETE USER ERROR : ${error}`);
  }
};
