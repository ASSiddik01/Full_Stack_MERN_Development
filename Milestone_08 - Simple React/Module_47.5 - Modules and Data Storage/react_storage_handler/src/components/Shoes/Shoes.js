import React from 'react';
import { add, multiply } from '../../utilities/calculate/calculate';

const Shoes = () => {
    const first = 12;
    const second = 10;
    const total = add(first, second);
    const result = multiply(first, second);
    return (
        <div>
            <h2>This is shoes</h2>
            <p>Total: {total} </p>
            <p>Result: {result} </p>
        </div>
    );
};

export default Shoes;