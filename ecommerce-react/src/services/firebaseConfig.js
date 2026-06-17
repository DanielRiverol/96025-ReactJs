// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7m2RBEQiJfuNeXS-oHMPM0CNJ05BLpaw",
  authDomain: "ecommerce-react-89e6f.firebaseapp.com",
  projectId: "ecommerce-react-89e6f",
  storageBucket: "ecommerce-react-89e6f.firebasestorage.app",
  messagingSenderId: "1032303360973",
  appId: "1:1032303360973:web:63f5ac62900e557c596284",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
