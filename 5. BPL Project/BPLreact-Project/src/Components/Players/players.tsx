import { use } from "react";
import type { PlayerType } from "../../types/playerType";
import AvailablePlayers from "./availablePlayers";


interface PlayersProps {
  playersPromise: Promise<PlayerType[]>
}

const Players = ({ playersPromise }: PlayersProps) => {
  const players = use(playersPromise);

  return (
    <div className="w-10/12 mx-auto mt-3.5">
      <div className="flex gap-4 justify-between items-center">
        <h1 className="font-bold text-xl">Available Players</h1>

        <div className="flex gap-4">
          <button className="btn btn-warning">Available</button>
          <button className="btn btn-outline btn-error">Selected</button>
        </div>

      </div>

      <AvailablePlayers players={players}></AvailablePlayers>
    </div>
  );
};

export default Players;

