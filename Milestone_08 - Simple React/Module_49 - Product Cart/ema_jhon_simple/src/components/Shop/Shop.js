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
  const handleAddToCart = (selectedProduct) => {
    // console.log(product)
    let newCart = [];
    const exists = cart.find(product => product.id === selectedProduct.id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter(product => product.id !== selectedProduct.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest,exists]
    }
    
    setCart(newCart);
    addToDb(selectedProduct.id);
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
