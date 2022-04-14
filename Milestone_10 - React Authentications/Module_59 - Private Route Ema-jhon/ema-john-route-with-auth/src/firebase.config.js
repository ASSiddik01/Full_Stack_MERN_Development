// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0VNY8digptV-K66QHLj96GdqqzATxT70",
  authDomain: "ema-jhon-react-with-auth.firebaseapp.com",
  projectId: "ema-jhon-react-with-auth",
  storageBucket: "ema-jhon-react-with-auth.appspot.com",
  messagingSenderId: "299519155001",
  appId: "1:299519155001:web:5eb6f332a52eb0d1aae6e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
 
export default auth;