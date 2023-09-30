import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDqTStk-SnCmpa3reN64bsAG832S6nceCY",
  authDomain: "e-commerce-80b02.firebaseapp.com",
  projectId: "e-commerce-80b02",
  storageBucket: "e-commerce-80b02.appspot.com",
  messagingSenderId: "282524594441",
  appId: "1:282524594441:web:590e2e90f96fa3295e63d8",
  measurementId: "G-7ZT8XN87YC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth= getAuth(app);