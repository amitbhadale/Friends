import mongoose from "mongoose";

const Schema = mongoose.Schema;

const friendSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const FriendMdl = mongoose.model("FriendModal", friendSchema);

export default FriendMdl;
