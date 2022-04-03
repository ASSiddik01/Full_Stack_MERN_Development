import React from 'react';
import useProducts from '../../hooks/useProducts';
import './Orders.css'
import useCart from '../../hooks/useCart';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    return (
        <div>
            <h2>Orders {products.length} </h2>
            <p>Cart has: {cart.length} </p>
        </div>
    );
};

export default Orders;