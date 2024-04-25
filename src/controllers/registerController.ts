import { Request, Response } from "express";
import bcryptjs from "bcryptjs";
const userModel = require("../models/userModel");

export const registerController = async (req: Request, res: Response) => {
  try {
    const { fullName, email, password, phoneNumber } = req.body;

    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "Email already use" });
    }

    const hashedPassword = await bcryptjs.hash(password, 10);

    const newUser = new userModel({
      fullName,
      email,
      password: hashedPassword,
      phoneNumber,
    });

    await newUser.save();

    res.status(201).json({ success: true, message: "Success" });
  } catch (error) {
    throw new Error(`REGISTERATION ERROR : ${error}`);
  }
};
