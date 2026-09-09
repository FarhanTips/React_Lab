import { use } from "react";
import type { PlayerType } from "../../types/playerType";


interface PlayersProps{
    playersPromise: Promise<PlayerType[]>
}

const Players = ({ playersPromise }: PlayersProps) => {
  const players = use(playersPromise);

  return (
    <div>
      <p>Number of Players: {players.length}</p>
    </div>
  );
};

export default Players;

