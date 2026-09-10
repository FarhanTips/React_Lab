import type { PlayerType } from "../../types/playerType";
import PlayerCard from "./playerCard";

interface AvailablePlayersProps {
    players: PlayerType[]
}

const AvailablePlayers = ({ players }: AvailablePlayersProps) => {
    return (
        <div className="grid grid-cols-3 gap-4">
            {
                players.map((player, index) => <PlayerCard key = {index} player={player}></PlayerCard>)
            }

        </div>
    );
};

export default AvailablePlayers;