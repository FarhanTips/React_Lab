import type { CountryType } from "../../type";
import "./countrycard.css"

export function CountryCard({country}: {country: CountryType}){
    return (
        <div className="countryCard">
            <p>{country.name.common}</p>
        </div>
    )
}