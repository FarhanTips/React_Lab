
interface TaskpropTypes {
    name: string,
    isDone: boolean
}
export default function Task({name, isDone}: TaskpropTypes){
    // Ternary rendering
    // return isDone ? <li>Completed: {name}</li> : <li>Pending: {name}</li>

    // && rendering
    // return isDone && <li>Completed: {name}</li>
    // If isDone is true, show <li>Completed: {name}</li>.
    // If false, show nothing.

    // || rendering
    return isDone===true || <li>Pending: {name}</li>
//  isDone?
//    │
//    ├── true  → return true → React shows nothing
//    │
//    └── false → return <li>Pending: name</li>


}
