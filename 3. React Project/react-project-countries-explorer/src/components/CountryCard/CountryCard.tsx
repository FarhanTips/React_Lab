import { useState } from "react";
import type { CountryType } from "../../type";
import "./countrycard.css"


interface CountryCardProps {
    country: CountryType,
    handleFlag: (flag: string) => void,
    visitedFlag: string[]
}
export function CountryCard({country, handleFlag, visitedFlag}: CountryCardProps){

    const [visited, SetVisited] = useState(false);
    const handleVisited = ()=>{
        SetVisited(!visited);
    }
    return (
        <div className={`countryCard ${visited ? 'country-visited' : ''}`}>
            <h3>{country.name.common}</h3>
            <img src={country.flags.flags.png} alt="country.flags.flags.alt" />
            <p>Population: {country.population.population}</p>
            <p>Capital: {country.capital.capital}</p>
            <button onClick={handleVisited}>{visited ? "Visited" : "Mark as Visited"}</button>
            <br />
            <br />
            {/* <button onClick={()=> handleFlag(country.flags.flags.png)}>Add Flag</button> */}
            <button onClick={()=> handleFlag(country.flags.flags.png)}>{visitedFlag.includes(country.flags.flags.png) ? "Flag Added" : "Add Flag"}</button>
        </div>
    )
}