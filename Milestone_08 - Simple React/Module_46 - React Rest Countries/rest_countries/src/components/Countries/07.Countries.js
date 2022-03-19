import React, { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  // 1
  const [countries, setCountries] = useState([]);
  // 2
  useEffect(() => {
    const url = `https://restcountries.com/v3.1/all`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      {/* 4 */}
      <h1>Total Country: {countries.length} </h1>

      <div className="country_contianer">
        {countries.map((country) => (
            <Country
                key={country.cca3}
                country={country}
            ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
