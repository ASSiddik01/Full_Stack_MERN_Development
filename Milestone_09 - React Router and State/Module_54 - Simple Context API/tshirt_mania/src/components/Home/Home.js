import React, { useState } from "react";
import useTshirt from "../../hooks/useTShirts";
import Cart from "../Cart/Cart";
import TShirt from "../TShirt/TShirt";
import "./Home.css";

const Home = () => {
  const [tShirts, setTShirt] = useTshirt();
  const [cart, setCart] = useState([]);
  const handleAddToCart = (selectedItem) => {
    const exist = cart.find((tShirt) => tShirt._id === selectedItem._id);
    if (!exist) {
      const newCart = [...cart, selectedItem];
      setCart(newCart);
    } else {
      alert("Item already added");
    }
  };
  const removeFromCart = (selectedItem) => {
    const rest = cart.filter((tShirt) => tShirt._id !== selectedItem._id);
    setCart(rest);
  };
  return (
    <div className="home_container">
      <div className="product_ontainer">
        {tShirts.map((tShirt) => (
          <TShirt
            key={tShirt._id}
            tShirt={tShirt}
            handleAddToCart={handleAddToCart}
          ></TShirt>
        ))}
      </div>
      <div className="cart_container">
        <Cart cart={cart} removeFromCart={removeFromCart}></Cart>
      </div>
    </div>
  );
};

export default Home;
