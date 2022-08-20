import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = new express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("welcome to index 1");
});

const PORT = 4999;

app.listen(PORT, () => console.log("server is running on port 4999"));
