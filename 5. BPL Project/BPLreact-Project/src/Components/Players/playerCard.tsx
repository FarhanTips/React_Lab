import { FaUser } from "react-icons/fa";
import type { PlayerType } from "../../types/playerType";
import { HiFlag } from "react-icons/hi";

interface PlayerCardProps {
    player: PlayerType,
    coin: number,
    handleCoin: (playerPrice: number) => void,
    handleSelected: (newP: PlayerType) => void,
    selectedArray: PlayerType[]
}

const PlayerCard = ({ player, coin, handleCoin, handleSelected,selectedArray }: PlayerCardProps) => {


    let isSelected: boolean = false; //Button-এর state change হচ্ছে না; selectedArray change হওয়ার কারণে isSelected নতুন করে calculate হচ্ছে, তারপর button-এর disabled এবং text-এর value change হচ্ছে।
    for (let i of selectedArray){
        if (i.playerName === player.playerName){
            isSelected = true;
        }
    }
    const handleChooseButton = () => {
        handleCoin(player.price);
        handleSelected(player);
    };

    return (
        <div className="group overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl mt-7">

            <div className="relative h-64 overflow-hidden bg-base-200">

                <img
                    src={player.playerImg}
                    alt={player.playerName}
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />

                {/* Player Type Badge */}
                <div className="absolute right-4 top-4 rounded-full bg-base-100/90 px-4 py-2 text-sm font-bold shadow backdrop-blur">
                    {player.playerType}
                </div>

            </div>

            {/* Card Content */}
            <div className="p-5">

                {/* Player Name / Origin */}
                <div className="mb-4">
                    <div className="flex items-center gap-2">
                        <FaUser className="text-xl" />

                        <h2 className="text-2xl font-bold tracking-tight">
                            {player.playerName}
                        </h2>
                    </div>

                    <div className="mt-2 flex items-center gap-2 text-sm text-base-content/60">
                        <HiFlag className="text-lg" />
                        <span>{player.origin}</span>
                    </div>

                </div>

                {/* Player Info */}
                <div className="grid grid-cols-2 gap-3">

                    <div className="rounded-xl bg-base-200 p-3">
                        <p className="mb-1 text-xs font-medium uppercase tracking-wide text-base-content/50">
                            Batting
                        </p>

                        <p className="font-semibold">
                            {player.battingStyle}
                        </p>
                    </div>

                    <div className="rounded-xl bg-base-200 p-3">
                        <p className="mb-1 text-xs font-medium uppercase tracking-wide text-base-content/50">
                            Bowling
                        </p>

                        <p className="font-semibold">
                            {player.bowlingStyle}
                        </p>
                    </div>

                </div>

                <div className="my-3 divider"></div>

                {/* Bottom Section */}
                <div className="flex items-center justify-between gap-4">

                    <div>
                        <p className="text-xs text-base-content/50">
                            Player Price
                        </p>

                        <p className="text-xl font-bold">
                            ${player.price}
                        </p>
                    </div>

                    <button onClick={handleChooseButton} className="btn btn-primary rounded-xl px-5" disabled={isSelected ? true : false}>
                        {isSelected ? "Selected" : "Choose Player"}
                    </button>

                </div>

            </div>
        </div>



    );
};

export default PlayerCard;