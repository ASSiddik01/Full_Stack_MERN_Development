import React from 'react';
import './Cart.css';

const Cart = ({cart,removeFromCart}) => {
    return (
        <div>
            <h1>Selected Items: {cart.length} </h1>
            {
                cart.map(tShirt => <p> {tShirt.name}
                    <button onClick={()=>removeFromCart(tShirt)}>x</button>
                </p>)
            }
        </div>
    );
};

export default Cart;