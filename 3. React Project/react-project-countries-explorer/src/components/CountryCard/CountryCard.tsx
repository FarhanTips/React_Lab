import type { CountryType } from "../../type";
import "./countrycard.css"

export function CountryCard({country}: {country: CountryType}){
    return (
        <div className="countryCard">
            <h3>{country.name.common}</h3>
            <img src={country.flags.flags.png} alt="country.flags.flags.alt" />
            <p>Population: {country.population.population}</p>
            <p>Capital: {country.capital.capital}</p>
        </div>
    )
}