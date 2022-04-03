import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useState(() => {
        const url = 'https://restcountries.com/v3.1/all'
        fetch(url)
            .then(res => res.json())
            .then(data => setCountries(data));
    },[])
    return (
        <div>
            <h1>Hello Rest Countries</h1>
            <p>Total Country: {countries.length} </p>
            {
                countries.map(country => <li> <Link to={`/country/${country.name.common}`}>{country.name.common}</Link> </li>)
            }
        </div>
    );
};

export default Countries;