import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import app from '../../firebase.config';


const auth = getAuth(app);

const Home = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div>
            <h1>Home</h1>
            <h3>Curant user: {user? user.displayName: "Home"} </h3>
        </div>
    );
};

export default Home;