// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiu2cGyGeoUbeENacuuknXgvwFdX9l4Fo",
  authDomain: "react-cursos-1a1a2.firebaseapp.com",
  projectId: "react-cursos-1a1a2",
  storageBucket: "react-cursos-1a1a2.appspot.com",
  messagingSenderId: "1021425518374",
  appId: "1:1021425518374:web:8c75657917d4ea2aff63e7"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );
