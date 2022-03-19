import React from "react";

const Country = (props) => {
  return (
    <div>
      <h2>Country Name: {props.name} </h2>
      <p>Population: {props.population} </p>
      <p>Area: {props.area} </p>
    </div>
  );
};

export default Country;
