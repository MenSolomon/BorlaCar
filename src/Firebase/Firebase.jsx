// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIMvcyiDiZw3_pXMO6_9WwI2tqDaCmEf8",
  authDomain: "borlacar-2868f.firebaseapp.com",
  projectId: "borlacar-2868f",
  storageBucket: "borlacar-2868f.appspot.com",
  messagingSenderId: "68009314200",
  appId: "1:68009314200:web:0c8e7f98d8842ffa158ded",
  measurementId: "G-0DR513KM9P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);
