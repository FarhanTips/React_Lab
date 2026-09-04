import { useState } from "react";


export default function Batter(){

    const [runs, setRuns] = useState(0);  // useState is a React Hook that lets a component remember data and update the UI when that data changes.

    const handleOneRun = () => {
        setRuns(runs+1);
    }
    const handleFourRun = () => {
        setRuns(runs+4);
    }
    const handleSixRun = () => {
        setRuns(runs+6);
    }

    return (
        <div>
        <p>-----------------------</p>
        <p>Score: {runs}</p>
        <button onClick={handleOneRun}>Add One Run</button>
        <button onClick={handleFourRun}>Add Four Run</button>
        <button onClick={handleSixRun}>Add Six Run</button>
        </div>
    )
}



/**
 When we do setRuns(...)

 React knows: React knows about the change and updates the screen.

State changed
     ↓
React re-renders component
     ↓
{runs} gets the new value
     ↓
UI updates


 */



// Note
// useState creates state:
// runs = current value
// setRuns = function to update state
// setRuns() tells React to re-render the UI
// useState(0) → initial value is 0
