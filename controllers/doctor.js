import { response } from "express";
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
    const newDoc = new doctor({
      name,
      specialization,
      experience_years,
      qualifications,
      location,
      clinic_name,
      rating,
      consultation_fees,
      availability,
    });
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
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const docs = await doctor.find({}).skip(skip).limit(limit);
    const total = await doctor.countDocuments();

    if (docs.length < 1)
      return res.status(404).json({ message: "no records found" });

    res.status(200).json({
      data: docs,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    });
  } catch (err) {
    res
      .status(500)
      .json({ error: "internal server error", message: err.message });
  }
};

export const getSingleDoctor = async (req, res) => {
  try {
    const { id } = req.params;
    const findDoc = await doctor.findById(id);
    if (!findDoc) return res.status(404).json({ message: "doctor not found" });
    res.status(200).json(findDoc);
  } catch (err) {
    res
      .status(500)
      .json({ error: "internal server error", message: err.message });
  }
};

export const updateDoctor = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const findDoc = await doctor.findById(id);
    if (!findDoc) return res.status(404).json({ message: "doctor not found" });
    const doc = await doctor.findByIdAndUpdate(id, body, { new: true });
    res.status(200).json(doc);
  } catch (err) {
    res
      .status(500)
      .json({ error: "internal server error", message: err.message });
  }
};

export const deleteDoctor = async (req, res) => {
  try {
    const { id } = req.params;
    const findDoc = await doctor.findById(id);
    if (!findDoc) return res.status(404).json({ message: "doctor not found" });
    await doctor.findByIdAndDelete(id);
    res.status(200).json({ message: "deleted successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ error: "internal server error", message: err.message });
  }
};
