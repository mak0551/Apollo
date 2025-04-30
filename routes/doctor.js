import express from "express";
import {
  addDoctor,
  deleteDoctor,
  getAllDoctors,
  getSingleDoctor,
  updateDoctor,
} from "../controllers/doctor.js";
const router = express.Router();

router.get("/getall", getAllDoctors);
router.get("/getbyid/:id", getSingleDoctor);

router.post("/add", addDoctor);

router.put("/update/:id", updateDoctor);

router.delete("/delete/:id", deleteDoctor);

export default router;
