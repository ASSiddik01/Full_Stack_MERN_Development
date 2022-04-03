import React from "react";
import "./ReviewItem.css";

const ReviewItem = (props) => {
  const { name, price, shipping, quantity } = props.product;
  return (
    <div>
      <h2>Review</h2>
    </div>
  );
};

export default ReviewItem;
