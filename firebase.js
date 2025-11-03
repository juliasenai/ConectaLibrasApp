import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCXSFXwS-BYi9uSufqQJgboN5hbfh95IdE",
  authDomain: "conectabd-b58eb.firebaseapp.com",
  projectId: "conectabd-b58eb",
  storageBucket: "conectabd-b58eb.appspot.com",
  messagingSenderId: "347595217563",
  appId: "1:347595217563:web:cb685efa1c92462883443e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
