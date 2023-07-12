import { Request, Response } from "express";
import GetPlayer from "../helpers/getPlayers";
import UpdatePlayerName from "../helpers/updatePlayerName";

export const getAllPlayers = async (req: Request, res: Response) => {
  try {
    const players = await GetPlayer.getAllPlayers();
    return res.status(201).json({
      players,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error 500 - Internal Server Error",
    });
  }
};

export const getOnePlayer = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const player = await new GetPlayer(id);
    const getPlayer = await player.getOnePlayer();
    return res.status(201).json({
      getPlayer,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error 500 - Internal Server Error",
    });
  }
};

export const updateName = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const { firstName, lastName } = req.body;
    const updatePlayerName = await new UpdatePlayerName(
      id,
      firstName,
      lastName
    );
    return res.status(201).json({
      message: "Player Updated",
      updatePlayerName,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error 500 - Internal Server Error",
    });
  }
};

export const deletePlayer = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const player = await new GetPlayer(id);
    player.getAndDelete();
    return res.status(201).json({
      message: "Player deleted",
      player,
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      message: "Player doesn't exist",
    });
  }
};
