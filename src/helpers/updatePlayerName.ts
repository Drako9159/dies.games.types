import { IPlayer } from "../interfaces/IPlayer";
import { Player } from "../models/Player";

class UpdatePlayerName {
  private id: string;
  private firstName: string;
  private lastName: string;

  constructor(id: string, firstName: string, lastName: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  async updateName() {
    const update = {
      firstName: this.firstName,
      lastName: this.lastName,
    };
    const player: IPlayer = (await Player.findOneAndUpdate(
      { _id: this.id },
      update
    )) as IPlayer;
    return player;
  }
}

export default UpdatePlayerName;
