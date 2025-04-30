import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    name: { type: String },
    specialization: { type: String },
    experience_years: { type: Number },
    qualifications: { type: String },
    location: { type: String },
    clinic_name: { type: String },
    rating: {
      percentage: { type: Number },
      reviews_count: { type: Number },
    },
    consultation_fees: {
      online: { type: Number },
      in_person: { type: Number },
    },
    availability: {
      online: { type: Number },
      in_person: { type: Number },
    },
  },
  { timestamps: true }
);

export const doctor = mongoose.model("Doctor", doctorSchema);
