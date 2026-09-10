import type { PlayerType } from "../../types/playerType";

interface SelectedPlayersProps {
    selectedArray: PlayerType[]
}

const SelectedPlayers = ({selectedArray}: SelectedPlayersProps) => {
    return (
        <div>
            {selectedArray.length <= 0 ? "No Data Currently" : selectedArray.length}
        </div>
    );
};

export default SelectedPlayers;