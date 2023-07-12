import { Router } from "express";
import {
  deletePlayer,
  getAllPlayers,
  getOnePlayer,
  updateName,
} from "../controllers/players.controllers";
import { validateToken } from "../middlewares/validateJWT";

const router: Router = Router();

router.get("/get-all-players", validateToken, getAllPlayers);

router.get("/get-player/:id", validateToken, getOnePlayer);

router.put("/update-player/:id", validateToken, updateName);

router.delete("/delete-player/:id", validateToken, deletePlayer);

export default router;
