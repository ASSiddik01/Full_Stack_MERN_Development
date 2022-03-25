import React from "react";
import "./Shop.css";
import { useState } from "react";
import { useEffect } from "react";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { addToDb, getStoredCart } from "../../utilities/fakedb";

const Shop = () => {
  // Step 3
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Get Local storage data
  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addProduct = products.find((product) => product.id === id);
      if (addProduct) {
        const quantity = storedCart[id];
        addProduct.quantity = quantity;
        savedCart.push(addProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  // Step 7
  const [cart, setCart] = useState([]);

  // Step 6
  const handleAddToCart = (product) => {
    // console.log(product)
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
  };
  return (
    <div className="shop_container">
      <div className="product_container">
        {/* Setp 4 */}
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart_container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
