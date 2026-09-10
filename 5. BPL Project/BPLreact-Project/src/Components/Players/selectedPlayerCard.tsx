

import { TbTrash } from "react-icons/tb";
import type { PlayerType } from "../../types/playerType";


interface SelectedPlayerCardProps {
    player: PlayerType,
    handleRemove: (Rplayer: PlayerType) => void
}
const SelectedPlayerCard = ({ player, handleRemove }: SelectedPlayerCardProps) => {



    return (
        <div className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md">

            <div className="flex items-center gap-4">
                <div className="flex h-20 w-20 items-center justify-center rounded-xl border border-gray-200 bg-gray-50">
                    <img
                        className="h-22 w-22 rounded-lg object-contain"
                        src={player.playerImg}
                        alt={player.playerName}
                    />
                </div>

                <div>
                    <p className="text-xl font-bold text-gray-900">
                        {player.playerName}
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                        {player.playerType}
                    </p>
                </div>
            </div>

            <TbTrash onClick={() => handleRemove(player)} className="cursor-pointer text-2xl text-gray-400 transition hover:text-red-500" />

        </div>
    );
};

export default SelectedPlayerCard;