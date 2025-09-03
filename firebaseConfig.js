// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDi_rWhlKa5cXz5Q82WOzCA_XT_4Y5IPfs",
  authDomain: "jmc-goals.firebaseapp.com",
  projectId: "jmc-goals",
  storageBucket: "jmc-goals.firebasestorage.app",
  messagingSenderId: "736850688917",
  appId: "1:736850688917:web:9f38a38827a42ac716d49c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)