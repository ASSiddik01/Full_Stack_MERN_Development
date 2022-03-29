import React from "react";
import "./Meal.css";

const Meal = (props) => {
  // console.log(props);
  const { addToOrders, meal } = props;
  const { strMeal, strInstructions, strMealThumb } = meal;

  return (
    <div className="meal">
      <img src={strMealThumb} alt="" />
      <h4>{strMeal}</h4>
      <p>{strInstructions.slice(0, 100)}</p>
      <button onClick={() => addToOrders(meal)}>Add this Food</button>
    </div>
  );
};

export default Meal;
