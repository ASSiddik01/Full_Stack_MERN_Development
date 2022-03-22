import React from 'react';
import './Shop.css'
import { useState } from 'react';
import { useEffect } from 'react';


const Shop = () => {
    // Step 3
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    },[])
    return (
        <div className='shop_container'>
            <div className="product_container">
                <h1>product_container</h1>
            </div>
            <div className="cart_container">
                <h3>Order Summary</h3>
            </div>
        </div>
    );
};

export default Shop;