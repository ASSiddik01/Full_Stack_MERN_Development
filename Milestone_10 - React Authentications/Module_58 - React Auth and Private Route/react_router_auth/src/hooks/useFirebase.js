import { useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../firebase.config';

const auth = getAuth(app);
const googelProvider = new GoogleAuthProvider()

const useFirebase = () => {
    const [user, setUser] = useState({});

    const signInWithGoogle = () => {
        signInWithPopup(auth, googelProvider)
            .then(result => {
                const user = result.user
                setUser(user);
                console.log(user);
            })
            .catch(error => {
                console.log(error.message);
        })
    }

    return {
        user,
        signInWithGoogle
    };
}

export default useFirebase;