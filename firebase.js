// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXSFXwS-BYi9uSufqQJgboN5hbfh95IdE",
  authDomain: "conectabd-b58eb.firebaseapp.com",
  projectId: "conectabd-b58eb",
  storageBucket: "conectabd-b58eb.firebasestorage.app",
  messagingSenderId: "347595217563",
  appId: "1:347595217563:web:cb685efa1c92462883443e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);