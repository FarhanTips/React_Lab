
import { Suspense } from 'react';
import './App.css'
import Countries from './components/Countries/countries';
import type { CountryType } from './type';

const countriesPromise = async (): Promise<CountryType[]> => {
  const res = await fetch("https://openapi.programming-hero.com/api/all");
  const data = await res.json();
  return data.countries;
}


function App() {

  return (
    <>
    <h2>Welocome</h2>
    <Suspense fallback={<p>Loading...</p>}>
    <Countries countriesPromise= {countriesPromise()}></Countries>
    </Suspense>
    </>
  )
}

export default App
