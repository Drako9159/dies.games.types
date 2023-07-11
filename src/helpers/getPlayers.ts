import { Player } from "../models/Player";

class GetPlayer {
  private id: string;

  constructor(id: string) {
    this.id = id;
  }

  static async getAllPlayers() {
    const players = await Player.find({});
    const response = players.map((e) => {
      const obj = {
        id: e._id,
        firstName: e.firstName,
        lastName: e.lastName,
        wonRate: e.wonRate,
      };
      return obj;
    });
    return response;
  }

  async getOnePlayer() {
    const player = await Player.findById({ _id: this.id });
    if (!player?._id) return false;
    return {
      firstName: player?.firstName,
      lastName: player?.lastName,
      playHistory: player?.playHistory,
    };
  }

  async getAndDelete() {
    const deletePlayer = await Player.findByIdAndDelete({ _id: this.id });
    return deletePlayer;
  }
}

export default GetPlayer;
