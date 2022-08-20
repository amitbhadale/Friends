import FriendMdl from "../models/friend_model.js";
import mongoose from "mongoose";

export const listFriends = async (req, res) => {
  try {
    console.log("listing frndss");
    const frnds = await FriendMdl.find();
    res.status(200).json(frnds);
  } catch (e) {
    console.log("error", e);
    res.status(400).json({ message: e.message });
  }
};

export const addFriends = async (req, res) => {
  try {
    const friend = new FriendMdl(req.body);
    const { title, city, phone } = req.body;
    console.log("data from body", title, city, phone);
    const response = await friend.save();
    res.status(200).json(response);
  } catch (e) {
    res.status(200).json({ message: e.message });
  }
};
