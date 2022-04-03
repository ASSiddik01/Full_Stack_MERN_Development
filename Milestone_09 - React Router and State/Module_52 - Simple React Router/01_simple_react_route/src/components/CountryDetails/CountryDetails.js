import React from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
    const { name } = useParams();
    return (
        <div>
            <h2>Country detail for: {name}</h2>
        </div>
    );
};

export default CountryDetails;