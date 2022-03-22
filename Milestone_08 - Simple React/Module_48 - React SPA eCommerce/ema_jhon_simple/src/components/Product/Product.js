import React from "react";
import "./Product.css";

const Product = (props) => {
  console.log(props.product);
  const { name, img, price, ratings, seller } = props.product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product_info">
        <p className="product_name">{name}</p>
        <p>Price: {price} </p>
        <p>Seller: {seller} </p>
        <p>Ratings: {ratings} stars</p>
          </div>
          <div className="product_footer">
              <button>Add To Cart</button>
          </div>
    </div>
  );
};

export default Product;
