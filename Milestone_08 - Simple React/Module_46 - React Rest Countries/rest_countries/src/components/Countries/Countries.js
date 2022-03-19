import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {
    // 1
    const [countries, setCountries] = useState([]);
    // 2
    useEffect(() => {
        const url = `https://restcountries.com/v3.1/all`;
        fetch(url)
            .then(res => res.json())
            .then(data => setCountries(data));
    },[])
    return (
        <div>
            {/* 4 */}
            {
                countries.map(country => <Country name={country.name.common} population={country.population} area={country.area}></Country>)
            }
            <h1>Total Country: {countries.length} </h1>
            
        </div>
    );
};

export default Countries;