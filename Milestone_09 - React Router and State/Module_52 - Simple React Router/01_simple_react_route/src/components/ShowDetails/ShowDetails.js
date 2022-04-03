import React from 'react';
import { useParams } from 'react-router-dom';

const ShowDetails = () => {
    let {id} = useParams();
    return (
        <div>
            <h2>This is details page about: {id} </h2>
        </div>
    );
};

export default ShowDetails;