// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCwQ5YyUDjME7EHYSULmlMbSLrG36LXdk",
  authDomain: "simple-firebase-auth-1d71f.firebaseapp.com",
  projectId: "simple-firebase-auth-1d71f",
  storageBucket: "simple-firebase-auth-1d71f.appspot.com",
  messagingSenderId: "428283808878",
  appId: "1:428283808878:web:6ad5263184e14e0c8b2a7f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;