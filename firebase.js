// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsGPoTMKOsd17IdoFkoPNJ9DLMsfcX7GA",
  authDomain: "inventory-management-app-4b394.firebaseapp.com",
  projectId: "inventory-management-app-4b394",
  storageBucket: "inventory-management-app-4b394.appspot.com",
  messagingSenderId: "937870002116",
  appId: "1:937870002116:web:404e56303932c16eaa8691",
  measurementId: "G-S17TTZFJ8Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore}