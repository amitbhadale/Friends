import express from "express";
import { addFriends, listFriends } from "../controllers/friends_controllers.js";
import { listCities, addCity } from "../controllers/city_controller.js";
const router = express.Router();

router.get("/friends", listFriends);
router.post("/friends", addFriends);

router.get("/city", listCities);
router.post("/city", addCity);

export default router;
