import { Request, Response } from "express";

export const error404 = (req: Request, res: Response): Response => {
  try {
    return res.status(404).json({
      message: "Error 404 - Page Not Found",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error 500 - Internal Server error",
    });
  }
};
