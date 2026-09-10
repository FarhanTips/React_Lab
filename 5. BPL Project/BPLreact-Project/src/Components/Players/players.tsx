import { use, useState } from "react";
import type { PlayerType } from "../../types/playerType";
import AvailablePlayers from "./availablePlayers";
import SelectedPlayers from "./selectedPlayers";


interface PlayersProps {
  playersPromise: Promise<PlayerType[]>,
  coin: number,
  handleCoin: (playerPrice: number) => void
}

const Players = ({ playersPromise, coin, handleCoin }: PlayersProps) => {
  const players = use(playersPromise);

  const [buttonType, setButtonType] = useState("available");

  const handleButtonType = (inputButtonType: "available" | "selected") => {
    setButtonType(inputButtonType);
  }

  return (
    <div className="w-10/12 mx-auto mt-3.5">
      <div className="flex gap-4 justify-between items-center">
        <h1 className="font-bold text-xl">Available Players</h1>

        <div>
          <button onClick={() => handleButtonType("available")} className={`btn rounded-r-none rounded-l-[10px] ${buttonType === "available" ? "btn-warning text-black font-bold" : "text-gray-400"}`}>Available</button>

          <button onClick={() => handleButtonType("selected")} className={`btn rounded-r-[10px] rounded-l-none ${buttonType === "selected" ? "btn-warning text-black font-bold" : "text-gray-400"}`}>Selected</button>
        </div>

      </div>

      {
        buttonType === "available" ? <AvailablePlayers players={players} coin={coin} handleCoin = {handleCoin}></AvailablePlayers> : <SelectedPlayers></SelectedPlayers>
      }

    </div>
  );
};

export default Players;

