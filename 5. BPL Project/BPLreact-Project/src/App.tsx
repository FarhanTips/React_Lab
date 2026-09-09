
import { Suspense } from 'react';
import './App.css'
import Nav from './Components/Nav'
import Players from './Components/Players/players';
import type { PlayerType } from './types/playerType';


const playersPromise = async (): Promise<PlayerType[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {

  return (
    <>
    <Nav></Nav>
    <Suspense fallback={<h3>Loading...</h3>}>
    <Players playersPromise={playersPromise()}></Players>
    </Suspense>
    </>
  )
}

export default App
