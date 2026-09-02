
interface TododPropType{
    task: string,
    time: string | number
}
// Without Destrcturing
// function Todo(props: TododPropType){
//     return (<>
//     <li>Do this work: {props.task} at {props.time}</li>
//     </>
//     )
// }

// With Destructuring
function Todo({task, time}: TododPropType){
    return (<>
    <li>Do this work: {task} at {time}</li>
    </>
    )
}

export default Todo;