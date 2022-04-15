import React from "react";

const Service = ({ service }) => {
  const { name, img, desription, price } = service;
    return <div>
        <h2> {name} </h2>
        <img src={img} alt="" />
  </div>;
};

export default Service;
