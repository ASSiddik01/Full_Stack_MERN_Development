// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCS1S95jc7QmEIZcy1dGR9UZown3bcH2Kw",
  authDomain: "genius-car-services-3dc5b.firebaseapp.com",
  projectId: "genius-car-services-3dc5b",
  storageBucket: "genius-car-services-3dc5b.appspot.com",
  messagingSenderId: "1084683387837",
  appId: "1:1084683387837:web:dacd06270ca5a5a78908d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
