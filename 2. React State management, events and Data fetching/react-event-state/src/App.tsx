
import { Suspense } from 'react'
import './App.css'
import Batter from './state change'
import User from './user data fetch'
import StateDoesntWork from './wrong state change'


const userDataPromise = async()=>{
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return data;
}


function App() {

  const handleClick = () =>{
    alert("button 1 clicked")
  }

  const handleAddToCart = (id) =>{
    alert("button 2 clicked with id: "+id)
  }
  return (
    <>
    <h1>Welcome my boy!</h1>
    <button onClick={handleClick}>Click me 1</button>
    <button onClick={() => handleAddToCart(65)}>Click me 2</button>
    <StateDoesntWork></StateDoesntWork>
    <Batter></Batter>
    
    <Suspense fallback={<p>Loading...</p>}>
      <User props = {userDataPromise()}></User>
    </Suspense>
    </>
  )
}

export default App
