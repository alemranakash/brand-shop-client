// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArDmH-bgUIZNM7zE_iiBX_5YQg7QJ1XE4",
  authDomain: "brand-shop-2a470.firebaseapp.com",
  projectId: "brand-shop-2a470",
  storageBucket: "brand-shop-2a470.appspot.com",
  messagingSenderId: "172533025952",
  appId: "1:172533025952:web:687590d8a358f37ba80dc5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;