import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = new express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("app is running on index2");
});

app.listen(4999, () => console.log("running on zzzz 4999"));
