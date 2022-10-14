import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import "./Countries.css"

const Countries = () => {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])
  return (
    <div>
      <h1>Hola!!! Let's Visit The World. {countries.length}</h1>
      <div className='countries-container'>
        {
          countries.map(country => <Country
            country={country}
            key = {country.cca3}
          ></Country>)

          // name={country.name.common}
          // population={country.population}
          // area={country.area}
          // region={country.region}
        }
      </div>
    </div>
  );
};


export default Countries;