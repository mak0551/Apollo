import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    name: { type: String },
  },
  { timestamps: true }
);

export const doctor = mongoose.model("doctor", doctorSchema);
