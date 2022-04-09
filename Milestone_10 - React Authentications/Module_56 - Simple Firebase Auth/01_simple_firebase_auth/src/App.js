import "./App.css";
import app from "./firebase.init";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";

function App() {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState({});

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="App">
      {user.email ? (
        <button onClick={handleGoogleSignOut}>Google Sign Out</button>
      ) : (
        <button onClick={handleGoogleSignIn}>Google Sign In</button>
      )}
      <h2>User: {user.displayName} </h2>
    </div>
  );
}

export default App;
