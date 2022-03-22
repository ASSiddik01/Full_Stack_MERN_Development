import React from "react";
import "./Product.css";

const Product = (props) => {
  console.log(props.product);
  const { name, img, price, ratings, seller } = props.product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <p className="product_name">{name}</p>
    </div>
  );
};

export default Product;
