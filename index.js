import express from "express";
import mongoose from "mongoose";
import doctor from "./routes/doctor.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const connectWithRetry = () => {
  return mongoose
    .connect(
      "mongodb+srv://khanafroz1516:ovbkpW9r4zVxHiwG@cluster0.gox1der.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => {
      console.log("database connected successfully");
    })
    .catch((error) => {
      console.log("Error connecting database, retry after 5 seconds", error);
      setTimeout(connectWithRetry, 5000);
    });
};
connectWithRetry();

const app = express();
app.use(express.json());

app.use(cors({ origin: "*" }));

app.listen(process.env.PORT || 4029, () => {
  console.log(`server is listening on port http://localhost:4020`);
});

app.get("/", (req, res) => {
  res.status(200).send("Home page");
});

app.use("/doctor", doctor);
