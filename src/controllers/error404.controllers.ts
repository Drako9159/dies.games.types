import { Request, Response } from "express";

export const error404 = (req: Request, res: Response) => {
  try {
    res.status(404).json({
      message: "Error 404 - Page Not Found",
    });
  } catch (error) {
    res.status(500).json({
        message: "Error 500 - Internal Server error"
    });
  }
};
