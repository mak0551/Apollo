import express from "express";
import { addDoctor, getAllDoctors } from "../controllers/doctor.js";
const router = express.Router();

router.get("/getall", getAllDoctors);

router.post("/add", addDoctor);

export default router;
