import { useState } from "react";
import type { CountryType } from "../../type";
import "./countrycard.css"

export function CountryCard({country}: {country: CountryType}){

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
            <button onClick={handleVisited}>{visited ? "Visited" : "Mars as Visited"}</button>
        </div>
    )
}