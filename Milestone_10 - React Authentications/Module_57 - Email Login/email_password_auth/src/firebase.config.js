// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBs9LTdxvXQ_Kd4_L4UAwOT-GUP3NdiYNg",
  authDomain: "email-password-auth-de630.firebaseapp.com",
  projectId: "email-password-auth-de630",
  storageBucket: "email-password-auth-de630.appspot.com",
  messagingSenderId: "280377498839",
  appId: "1:280377498839:web:62cdda37d4be6506d9a492"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app