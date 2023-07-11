import { Response, Request } from "express";

export const test = (req: Request, res: Response): Response => {
    return res.status(200).json({ 
        message: "Esto funciona"
     })
}