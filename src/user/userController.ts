import { Request, Response, NextFunction } from "express";
import userModel from "./userModel";

// Controller function to create a user
const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email } = req.body; // Get name and email from request body

    // Check if the user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User with this email already exists." });
    }

    // Create a new user
    const newUser = new userModel({ name, email });
    await newUser.save();

    res.status(201).json({
      message: "User Created Successfully",
      user: newUser,
    });
  } catch (error) {
    next(error); // Pass the error to the global error handler
  }
};

export default createUser;
