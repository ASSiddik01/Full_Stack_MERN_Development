import React, { useEffect, useState } from 'react';
import DisplayUser from '../DisplayUser/DisplayUser';
import './LoadUser.css'

const LoadUser = () => {
    // 1
    const [users, setUsers] = useState([]);
    // 2
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [])
    
    return (
        <div className='user_contianer'>
            {/* 3 */}
            {
                users.map(user => <DisplayUser
                    key={user.id}
                    user={user}
                ></DisplayUser>)
            }
        </div>
    );
};

export default LoadUser;