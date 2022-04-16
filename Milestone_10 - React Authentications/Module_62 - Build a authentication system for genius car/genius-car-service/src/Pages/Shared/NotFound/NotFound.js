import React from 'react';

import error from '../../../images/404.jpg'

const NotFound = () => {
    return (
        <div className='text-center'>
            <img className='w-75 ' src={error} alt="" />
        </div>
    );
};

export default NotFound;