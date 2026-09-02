
import './App.css'
import Todo from "./todo"
import Task from "./task"

function App() {

  return (
    <>
    <h1>Get Started</h1>
    <Student name="Farhan" gpa="3.92"></Student>
    <Student></Student>
    <Student name="Khan"></Student>
    <Todo task="Take a shower" time = "12:30 pm"></Todo>
    <Todo task="Do coding" time = {9}></Todo>
    <Todo task="Sleep Time" time = "11:00 pm"></Todo>
    <Task name="Playing Football" isDone={true}></Task>
    <Task name="Attend classes" isDone={false}></Task>
    <Task name="Scrolling Facebook" isDone={true}></Task>
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
