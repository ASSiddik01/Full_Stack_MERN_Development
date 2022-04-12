import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import app from '../../firebase.config';


const auth = getAuth(app);

const Products = () => {
    const [user, loading, error] = useAuthState(auth);

    return (
        <div>
            <h1>Products</h1>
            <h3>Curant user: {user? user.displayName: "Products"} </h3>

        </div>
    );
};

export default Products;