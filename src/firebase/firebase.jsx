import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDNXLJxx5bQ6C2zos5J4PNkaJQmoT-iAVw",
    authDomain: "react-crud-operations-9007a.firebaseapp.com",
    projectId: "react-crud-operations-9007a",
    storageBucket: "react-crud-operations-9007a.appspot.com",
    messagingSenderId: "1026988413704",
    appId: "1:1026988413704:web:3cd1249ac83bcf9bfa12bd",
    measurementId: "G-L6EF843LQJ"
  };
  
// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);