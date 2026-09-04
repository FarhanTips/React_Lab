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



/**
 * 
fetch() → data চায়
async/await → সেই data পাওয়ার process সহজ করে
Suspense → অপেক্ষা করার সময় React-এ fallback UI দেখায়
 * 
 * 
 * 
 *            React
                │
                ↓
             <Users />
                │
                ↓
          fetch("/api/users")
                │
                ↓
             Promise
                │
                ↓
              await
                │
       ┌────────┴────────┐
       │                 │
  Data আসেনি          Data এসেছে
       │                 │
       ↓                 ↓
 "Loading..."        Users data
       │                 │
       └────────┬────────┘
                ↓
             UI show


Or check this below:

Frontend
   ↓
fetch()
   ↓
Promise
   ↓
await
   ↓
Response
   ↓
response.json()
   ↓
await
   ↓
Actual Data
   ↓
UI
 */