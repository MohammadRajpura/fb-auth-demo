// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAdHh4OP-T-nqUTPM_o6Gb4WrgpkY2hUso",
  authDomain: "fb-auth-demo-1a4d4.firebaseapp.com",
  projectId: "fb-auth-demo-1a4d4",
  storageBucket: "fb-auth-demo-1a4d4.firebasestorage.app",
  messagingSenderId: "1025445227455",
  appId: "1:1025445227455:web:f31ffb1097b3cc28a04f0a",
  measurementId: "G-EFXHF6GTHR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
