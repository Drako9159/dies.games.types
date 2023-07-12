import express, { Application } from "express";
import config from "../config";
import routerGames from "../routes/diceGame.routes";
import routerError404 from "../routes/error404.routes";
import routerAuth from "../routes/auth.routes"
import routerPlayers from "../routes/players.routes"
import { connectDB } from "../db/config";
import cors from "cors";

class Server {
  private app: Application;
  private port: string;
  private path = {
    error404: "*",
    games: "/games",
    auth: "/auth",
    players: "/players"
  };

  constructor() {
    this.app = express();
    this.port = config.port as string;

    this.middlewares();
    this.routes();
    this.dbConnect();
    
  }

  async dbConnect() {
    await connectDB();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(cors());
  }

  routes() {
    this.app.use(this.path.games, routerGames);
    
    this.app.use(this.path.auth, routerAuth)

    this.app.use(this.path.players, routerPlayers)

    this.app.use(this.path.error404, routerError404); // last routes
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`[server] run on port ${this.port}`);
    });
  }
}

export default Server;
