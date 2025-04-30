import { doctor } from "../models/doctor.js";

export const addDoctor = async (req, res) => {
  try {
    const {
      name,
      specialization,
      experience_years,
      qualifications,
      location,
      clinic_name,
      rating,
      consultation_fees,
      availability,
    } = req.body;
    const newDoc = new doctor(
      name,
      specialization,
      experience_years,
      qualifications,
      location,
      clinic_name,
      rating,
      consultation_fees,
      availability
    );
    await newDoc.save();
    res.status(200).json(newDoc);
  } catch (err) {
    res
      .status(500)
      .json({ error: "internal server error", message: err.message });
  }
};

export const getAllDoctors = async (req, res) => {
  try {
    const docs = await doctor.find({});
    if (docs.length < 1)
      return res.status(404).json({ message: "no records found" });
    res.status(200).json(docs);
  } catch (err) {
    res
      .status(500)
      .json({ error: "internal server error", message: err.message });
  }
};
