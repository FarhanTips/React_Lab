import { use, useState } from "react"
import type { CountryType } from "../../type";
import { CountryCard } from "../CountryCard/CountryCard";
import "./countries.css"

interface CountriesProps {
    countriesPromise: Promise<CountryType[]>;
}


export default function Countries({ countriesPromise }: CountriesProps) {
    const countries = use(countriesPromise);
    const [visitedFlag, setVisitedFlag] = useState<string[]>([]);

    const handleFlag = (flag: string): void => {
        if (visitedFlag.includes(flag)) {
            const reamaingFlags = visitedFlag.filter(elem => elem !== flag);  // React সাধারণত reference comparison ব্যবহার করে বুঝতে পারে state change হয়েছে কিনা। তাই push করলে হবে না।
            setVisitedFlag(reamaingFlags);   // setVisitedFlag শুধু visitedFlag এর value পরিবর্তন করে না, React-কে re-render করার জন্যও জানায়।
        }
        else {
            const newVisitedFlag = [...visitedFlag, flag];
            setVisitedFlag(newVisitedFlag);  // setVisitedFlag শুধু visitedFlag এর value পরিবর্তন করে না, React-কে re-render করার জন্যও জানায়।
        }
    }
    return (
        <div>
            <p>Countries: {countries.length}</p>
            <h3>Total Flag(s) added: {visitedFlag.length}</h3>
            <div className="visitedFlags">
                {
                    visitedFlag.map((elem, index) => <img key={index} src={elem} alt="Visited Flag" />)
                }
            </div>
            <div className="countries">
                {
                    countries.map(country => <CountryCard
                        key={country.ccn3.ccn3}
                        country={country}
                        handleFlag={handleFlag}
                        visitedFlag={visitedFlag}></CountryCard>)
                }
            </div>

        </div>
    )
}