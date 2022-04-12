import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Home = () => {
    const { user } = useFirebase();
    return (
        <div>
            <h1>Home</h1>
            <h3>Curant user: {user? user.displayName: "No Body"} </h3>
        </div>
    );
};

export default Home;