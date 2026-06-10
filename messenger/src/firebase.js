// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNFhEZNCOoZFrPx-xqpCJDoKEvuVCwYtE",
  authDomain: "messenger-edb8f.firebaseapp.com",
  projectId: "messenger-edb8f",
  storageBucket: "messenger-edb8f.firebasestorage.app",
  messagingSenderId: "879216408956",
  appId: "1:879216408956:web:e5d6cfbce31eb5e881ccf9",
  measurementId: "G-LKJV24MLZ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);