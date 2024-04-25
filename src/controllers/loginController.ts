import { Request, Response } from "express";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
const userModel = require("../models/userModel");

export const loginController = async (req: Request, res: Response) => {
  try {
    const JWT_SECRET = process.env.JWT_SECRET!;
    const JWT_EXPIRE = process.env.JWT_EXPIRE!;

    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Invalid Credential" });
    }

    const passwordMatch = await bcryptjs.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid Credential" });
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
      // in .env all variable are STRING, JWT_EXPIRE need to be parseInt to get 3600 sec (1h)
      expiresIn: parseInt(JWT_EXPIRE),
    });

    res.json({ token });
  } catch (error) {
    throw new Error(`LOGIN ERROR : ${error}`);
  }
};
