
import './App.css'

function App() {

  return (
    <>
    <h1>Get Started</h1>
    <Student name="Farhan" gpa="3.92"></Student>
    <Student></Student>
    <Student name="Khan"></Student>
    </>
  )
}

function Student(props) {
  const studentStyle = {
    border: "2px solid salmon",
    borderRadius: "10px",
    margin: "10px"
  }
  return (
    <div style={studentStyle}>
      <h3>Name: {props.name}</h3>
      <p>Grades: {props.gpa}</p>
    </div>
  )
}

export default App
