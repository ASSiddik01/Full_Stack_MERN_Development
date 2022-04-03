import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import SingleFriend from '../SingleFriend/SingleFriend';

const Friend = () => {
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/users'
        fetch(url)
            .then(res => res.json())
            .then(data => setFriends(data));
    }, []);
    return (
        <div>
            <h2>We are friends</h2>
            <p>Total friend: {friends.length} </p>
            {
                friends.map(friend => <SingleFriend
                    key={friend.id}
                    friend={friend}
                ></SingleFriend>)
            }
        </div>
    );
};

export default Friend;