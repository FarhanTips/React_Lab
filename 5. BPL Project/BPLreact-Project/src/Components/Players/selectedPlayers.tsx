import type { Dispatch, SetStateAction } from "react";
import type { PlayerType } from "../../types/playerType";
import SelectedPlayerCard from "./selectedPlayerCard";

interface SelectedPlayersProps {
    selectedArray: PlayerType[],
    setSelectedArray: Dispatch<SetStateAction<PlayerType[]>>,
    setCoin: Dispatch<SetStateAction<number>>,
    coin: number
}

const SelectedPlayers = ({ selectedArray, setSelectedArray, setCoin, coin}: SelectedPlayersProps) => {

    const handleRemove = (Rplayer:PlayerType ) => {
        let newArr = selectedArray.filter(player => player.playerName !== Rplayer.playerName);
        setSelectedArray(newArr);

        const newCoin = coin + Rplayer.price;
        setCoin(newCoin);
    }

    if (selectedArray.length <= 0) {
        return (
            <div className="flex min-h-100 items-center justify-center px-4">
                <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-10 text-center shadow-sm">

                    {/* Icon */}
                    <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                        <span className="text-3xl">👥</span>
                    </div>

                    {/* Heading */}
                    <h2 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">
                        No Players Selected
                    </h2>

                    {/* Description */}
                    <p className="mb-6 text-sm leading-6 text-gray-500">
                        You haven't selected any players yet. Go to the{" "}
                        <span className="font-medium text-gray-700">
                            Available
                        </span>{" "}
                        tab to choose your players.
                    </p>

                </div>
            </div>
        );
    }
    return (
        <div className="grid grid-cols-1 gap-4">
            {selectedArray.map((elem, idx) => <SelectedPlayerCard key={idx} player={elem} handleRemove={handleRemove}></SelectedPlayerCard>)}
        </div>

    );
};

export default SelectedPlayers;