import UserCart from "./users_cart"

interface User{
    name: string,
    isLoggedIn: boolean
}

const users: User[] = [
    {name: "Sani", isLoggedIn: true},
    {name: "Shah", isLoggedIn: false},
    {name: "Bapparaj", isLoggedIn: false},
    {name: "Sakib", isLoggedIn: true}
]
export default function Users(){

    return (<div>
        {
            users.map(elem => <UserCart name={elem.name} available={elem.isLoggedIn}></UserCart>)

        }
           </div>
    )
}