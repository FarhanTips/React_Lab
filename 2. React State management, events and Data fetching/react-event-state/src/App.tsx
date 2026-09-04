
import './App.css'

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
    </>
  )
}

export default App
