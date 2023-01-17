// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore }from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBb--NcM2F2tsqW8Rc38D0tEF66AYDvziA",
  authDomain: "realtor-web-site.firebaseapp.com",
  projectId: "realtor-web-site",
  storageBucket: "realtor-web-site.appspot.com",
  messagingSenderId: "112004517917",
  appId: "1:112004517917:web:803ae945adb82a2289b6f4",
  measurementId: "G-8W5QD5HB4N"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();