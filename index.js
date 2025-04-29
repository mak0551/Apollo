import express from "express";
import mongoose from "mongoose";
const app = express();

app.listen(4020, () => {
  console.log("server is listening on port http://localhost:4020");
});
