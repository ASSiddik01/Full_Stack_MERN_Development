import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
    </div>
  );
}

// 1
function LoadCountries() {
  // 2
  const [countries, setCountries] = useState([]);
  // 3
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      <h2>World Tour</h2>
      <p>Total Country: {countries.length} </p>
      
      {/* 4 */}
      {
        
        countries.map(country=> <DisplayCountry name={country.name.common} population={country.population} ></DisplayCountry> )
      }

    </div>
  );
}

// 5
function DisplayCountry(props) {
  return (
    <div>
      <h3>Country Name: {props.name} </h3>
      <h4>Population: {props.population} </h4>
    </div>
  );
}

export default App;
