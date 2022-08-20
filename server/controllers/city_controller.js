import mongoose from "mongoose";
import CityMdl from "../models/city_model.js";

export const listCities = async (req, res) => {
  try {
    const cities = await CityMdl.find();
    res.status(200).json(cities);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

export const addCity = async (req, res) => {
  try {
    const city = new CityMdl(req.body);
    const resp = await city.save();
    res.status(200).json(resp);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};
