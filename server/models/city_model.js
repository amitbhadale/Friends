import mongoose from "mongoose";

const Schema = mongoose.Schema;
const citySchema = new Schema(
  {
    cityName: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const CityMdl = mongoose.model("City", citySchema);

export default CityMdl;
