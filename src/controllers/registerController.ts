import { Request, Response } from "express";
import bcryptjs from "bcryptjs";

import { validateEmail } from "../utils/emailValidationSchema";
import { validatePassword } from "../utils/passwordValidationSchema";

const userModel = require("../models/userModel");

export const registerController = async (req: Request, res: Response) => {
  try {
    const { fullName, email, password, phoneNumber } = req.body as {
      fullName: string;
      email: string;
      password: string;
      phoneNumber: string;
    };

    const isEmailValid = validateEmail(email);
    if (!isEmailValid) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid email format" });
    }

    const isPasswordValid = validatePassword(password);
    if (!isPasswordValid) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid password format" });
    }

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
