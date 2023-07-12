import { Response, Request } from "express";
import RollGame from "../helpers/diceGame";
import { Player } from "../models/Player";

export const playerRollDice = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const game = await new RollGame(id);
    const playerRollDices = await game.playerRollDice();
    return res.status(201).json({
      playerRollDices,
    });
  } catch (error) {
    return res.status(400).json({
      message: "The Id entered isn't valid!!",
    });
  }
};

export const generalRanking = async (req: Request, res: Response) => {
  try {
    const ranking = await RollGame.generalRanking();
    return res.status(201).json({
      ranking,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error 500 - Internal Server Error",
    });
  }
};

export const getBetterPlayer = async (req: Request, res: Response) => {
  try {
    const betterPlayer = await RollGame.getBetterPlayer();
    return res.status(201).json({
      betterPlayer,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error 500 - Internal Server Error",
    });
  }
};

export const getWorstPlayer = async (req: Request, res: Response) => {
  try {
    const worstPlayer = await RollGame.getWorstPlayer();
    return res.status(201).json({
      worstPlayer,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error 500 - Internal Server Error",
    });
  }
};

export const deleteGames = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const player = await new RollGame(id);
    const deleteGames = await player.deleteGames();
    return res.status(201).json({
      message: "Player games deleted successfully",
      deleteGames,
    });
  } catch (error) {
    return res.status(400).json({
      message: "The ID entered is not valid!!",
    });
  }
};
