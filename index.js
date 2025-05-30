import express from "express";
import mongoose from "mongoose";
import doctor from "./routes/doctor.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const connectWithRetry = () => {
  return mongoose
    .connect(process.env.DB_URL)
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

app.listen(process.env.PORT, () => {
  console.log(
    `server is listening on port http://localhost:${process.env.PORT}`
  );
});

app.get("/", (req, res) => {
  res.status(200).send("Home page");
});

app.use("/doctor", doctor);
