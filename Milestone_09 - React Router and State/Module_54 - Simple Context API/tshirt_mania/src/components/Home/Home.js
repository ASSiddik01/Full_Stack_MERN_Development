import React from "react";
import useTshirt from "../../hooks/useTShirts";
import Cart from "../Cart/Cart";
import TShirt from "../TShirt/TShirt";
import "./Home.css";

const Home = () => {
  const [tShirts, setTShirt] = useTshirt();
  return (
    <div className="home_container">
      <div className="product_ontainer">
        {tShirts.map((tShirt) => (
          <TShirt key={tShirt._id} tShirt={tShirt}></TShirt>
        ))}
      </div>
      <div className="cart_container">
        <Cart></Cart>
      </div>
    </div>
  );
};

export default Home;
