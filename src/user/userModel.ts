import mongoose, { Schema, Document } from "mongoose";

// Define the User interface
export interface User extends Document {
  name: string;
  email: string; // Use lowercase 'email' to keep naming consistent
}

// Define the User Schema
const userSchema = new Schema<User>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, // Email should be unique
    },
  },
  { timestamps: true }
);

// Export the User model
export default mongoose.model<User>("User", userSchema);
