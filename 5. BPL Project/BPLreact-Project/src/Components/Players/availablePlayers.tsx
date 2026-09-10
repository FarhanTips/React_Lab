
import type { PlayerType } from "../../types/playerType";
import PlayerCard from "./playerCard";

interface AvailablePlayersProps {
    players: PlayerType[],
    coin: number,
    handleCoin: (playerPrice: number) => void,
    handleSelected: (newP : PlayerType) => void,
    selectedArray: PlayerType[]
}

const AvailablePlayers = ({ players, coin, handleCoin, handleSelected, selectedArray }: AvailablePlayersProps) => {

    

    return (
        <div className="grid grid-cols-3 gap-4">
            {
                players.map((player, index) => <PlayerCard key={index} player={player} coin={coin} handleCoin = {handleCoin} handleSelected={handleSelected} selectedArray={selectedArray} ></PlayerCard>)
            }

        </div>
    );
};

export default AvailablePlayers;