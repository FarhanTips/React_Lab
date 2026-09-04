import { use } from "react"
import UserCard from "./user_card";


export default function User({props}){
    const msg = use(props);
    return (
        <>
        <p>------------------------</p>
        <h3>Users Data length: {msg.length}</h3>
        {
            msg.map(elem => <UserCard name = {elem.name}></UserCard>)
        }
        </>
    )
}