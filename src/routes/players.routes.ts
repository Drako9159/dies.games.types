import { Router } from "express";
import {
    deletePlayer,
  getAllPlayers,
  getOnePlayer,
  updateName,
} from "../controllers/players.controllers";

const router: Router = Router();

router.get("/get-all-players", getAllPlayers);

router.get("/get-player/:id", getOnePlayer);

router.put("/update-player/:id", updateName);

router.delete("/delete-player/:id", deletePlayer)

export default router;
