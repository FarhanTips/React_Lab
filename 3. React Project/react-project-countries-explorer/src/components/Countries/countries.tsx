import { use } from "react"
import type { CountryType } from "../../type";
import { CountryCard } from "../CountryCard/CountryCard";
import "./countries.css"

interface CountriesProps {
    countriesPromise: Promise<CountryType[]>;
}


export default function Countries({ countriesPromise }: CountriesProps) {
    const countries = use(countriesPromise);
    console.log(countries);
    return (
        <div>
            <p>Countries: {countries.length}</p>
            <div className="countries">
                {
                    countries.map(country => <CountryCard key={country.ccn3.ccn3} country={country}></CountryCard>)
                }
            </div>

        </div>
    )
}