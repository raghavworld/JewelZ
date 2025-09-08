import mongoose from "mongoose";
export const userModel = mongoose.Model(
  {
    name: String,
    passwordHash: String,
    name: String,
    role: { type: String, default: "user" },
    resetToken: String,
    resetTokenExp: Date,
    refreshVersion: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);
