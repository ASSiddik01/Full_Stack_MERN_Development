import React from "react";

const InfoCard = ({ img, title, desc, bgColor }) => {
  return (
    <div className={`card lg:card-side shadow-xl px-4 ${bgColor} `}>
      <figure>
        <img src={img} alt="Album" className="lg:mt-0 mt-4" />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title">{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default InfoCard;
