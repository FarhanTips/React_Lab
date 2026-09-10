
import { Suspense, useState } from 'react';
import './App.css'
import Nav from './Components/Nav'
import Players from './Components/Players/players';
import type { PlayerType } from './types/playerType';
import { toast } from 'react-toastify';


const fetchPromise = async (): Promise<PlayerType[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

const playersPromise = fetchPromise();

function App() {

  const [coin, setCoin] = useState(500);

  const handleCoin = (playerPrice: number) => {
    if (coin >= playerPrice) {
      setCoin(coin - playerPrice);
      toast.success("Purchase Successful!");
    } else {
      toast.error("Insufficient Coins!");
    }

  };

  return (
    <>
      <Nav coin={coin}></Nav>
      <Suspense fallback={<h3>Loading...</h3>}>
        <Players playersPromise={playersPromise} coin={coin} handleCoin={handleCoin} setCoin={setCoin}></Players>
      </Suspense>
    </>
  )
}

export default App
