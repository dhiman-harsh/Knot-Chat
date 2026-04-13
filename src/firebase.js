// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3cV34m2wghq9odGCZZLyGS3ndNtNnT6w",
  authDomain: "chat-app-a9b9b.firebaseapp.com",
  projectId: "chat-app-a9b9b",
  storageBucket: "chat-app-a9b9b.firebasestorage.app",
  messagingSenderId: "829867505644",
  appId: "1:829867505644:web:ef13b3fe78d3422d4b32c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const googleProvider = new GoogleAuthProvider();