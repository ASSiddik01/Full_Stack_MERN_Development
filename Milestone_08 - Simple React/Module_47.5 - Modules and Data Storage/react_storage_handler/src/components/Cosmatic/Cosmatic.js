import React from "react";
import "./Cosmatic.css";

const Cosmatic = (props) => {
  const { id, name, price } = props.cosmatic;

  const addToCart = (id) => {
    console.log('aaaz',id);
  }

  const addToCartWithPram= ()=> addToCart(id)

  return (
    <div className="product">
      <h2>Name: {name}</h2>
      <p>Price: {price} </p>
      <p>Id: {id} </p>
      <button onClick={addToCartWithPram}>Add to Cart</button>
      {/* ShortCut */}
      <button onClick={()=> addToCart(id)}>Shortcut to Cart</button>
    </div>
  );
};

export default Cosmatic;
