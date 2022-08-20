import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import friendsRoutes from "./routes/index.js";

const app = new express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/", friendsRoutes);

const dbUrl =
  "mongodb://adminuser:hardwellamit@ac-re3mxvf-shard-00-00.lh65bgg.mongodb.net:27017,ac-re3mxvf-shard-00-01.lh65bgg.mongodb.net:27017,ac-re3mxvf-shard-00-02.lh65bgg.mongodb.net:27017/mernstack?ssl=true&replicaSet=atlas-8i9vjg-shard-0&authSource=admin&retryWrites=true&w=majority";

// app.get("/", (req, res) => {
//   res.send("server is workingggggggggg");
// });
const PORT = 4000;

mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(app.listen(PORT, () => console.log("server is running, connected")))
  .catch((e) => console.log(e));
