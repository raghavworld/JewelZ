import mongoose from "mongoose";

export const userModel = mongoose.model(
  "users",
  new mongoose.Schema(
    {
      email: { type: String, required: true },
      passwordHash: { type: String, required: true },
      name: String,
      role: { type: String, default: "user" },
      resetToken: String,
      resetTokenExp: String,
      refreshVersion: { type: Number, default: 0 },
    },
    { timestamps: true }
  )
);
