
import './App.css'

function App() {

  return (
    <>
    <h1>Get Started</h1>
    <Student></Student>
    <Student></Student>
    <Student></Student>
    </>
  )
}

function Student() {
  const studentStyle = {
    border: "2px solid salmon",
    borderRadius: "10px",
    margin: "10px"
  }
  return (
    <div style={studentStyle}>
      <h3>Name:</h3>
      <p>Grades:</p>
    </div>
  )
}

export default App
