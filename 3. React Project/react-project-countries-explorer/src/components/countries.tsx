import { use } from "react"



export default function Countries({countriesPromise}){
    const countries = use(countriesPromise);
    console.log(countries);
    return (
        <div>
            <p>Countries: {countries.length}</p>
        </div>
    )
}