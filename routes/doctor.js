import express from "express";
import { addDoctor, getAllDoctors } from "../controllers/doctor";
const router = express.Router();

router.get("/getall", getAllDoctors);

router.post("/add", addDoctor);
