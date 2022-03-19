import React from "react";

const Country = (props) => {
  console.log(props.country);
  const { name, population, area } = props.country;
  return (
    <div>
      {/* <h2>Country Name: {props.country.name.common} </h2> */}
      <h2>Country Name: {name.common} </h2>
      <p>Population: {population} </p>
      <p>Area: {area} </p>
    </div>
  );
};

export default Country;
