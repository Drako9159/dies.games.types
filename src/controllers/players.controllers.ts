import { Request, Response } from "express";

export const getAllPlayers = (req: Request, res: Response) => {
  try {
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error 500 - Internal Server Error",
    });
  }
};

export const getOnePlayer = (req: Request, res: Response) => {
  try {
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error 500 - Internal Server Error",
    });
  }
};

export const updateName = (req: Request, res: Response) => {
  try {
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error 500 - Internal Server Error",
    });
  }
};

export const deletePlayer = (req: Request, res: Response) => {
  try {
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error 500 - Internal Server Error",
    });
  }
};
