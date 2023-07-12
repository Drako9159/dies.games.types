import { Request, Response } from "express";
import Auth from "../helpers/auth";

export const register = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const date = new Date();
    const player = new Auth(email, password, firstName, lastName, date);
    const register = await player.register();
    return res.status(201).json({
      firstName,
      lastName,
      email,
      date,
      jwt: register,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error 500 - Internal Server Error",
    });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const player = new Auth(email, password);
    const login = await player.login();

    if (login === "Wrong email!!") {
      return res.status(400).json({
        message: "The email address entered is not registered!",
      });
    }
    if (login === "Wrong password!!") {
      return res.status(400).json({
        message: "The password entered is not valid!",
      });
    }

    return res.status(201).json({
      message: "Successfully authentication",
      jwt: login,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error 500 - Internal Server Error",
    });
  }
};
