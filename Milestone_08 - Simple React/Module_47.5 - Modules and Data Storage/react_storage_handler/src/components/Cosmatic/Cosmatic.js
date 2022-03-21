import React from "react";

const Cosmatic = (props) => {
  const { name, price } = props.cosmatic;
  return (
    <div>
          <h2>Name: {name}</h2>
          <p>Price: {price} </p>
    </div>
  );
};

export default Cosmatic;