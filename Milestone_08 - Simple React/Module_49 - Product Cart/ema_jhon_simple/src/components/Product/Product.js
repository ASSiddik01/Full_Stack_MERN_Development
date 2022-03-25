import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = (props) => {
  // console.log(props)
  const { name, img, price, ratings, seller } = props.product;
  // Setp 6
  const { handleAddToCart } = props;

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
        <button onClick={() => handleAddToCart(props.product)}>
          Add To Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default Product;
