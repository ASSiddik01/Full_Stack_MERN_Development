import React from 'react';
import './DisplayUser.css';

const DisplayUser = (props) => {
    // console.log(props.user);
    // 4
    const {name, email,phone } = props.user;
    return (
        <div className='user'>
            <h3>Name:: {name} </h3>
            <p>Email:: {email} </p>
            <p>Phone:: {phone} </p>
        </div>
    );
};

export default DisplayUser;