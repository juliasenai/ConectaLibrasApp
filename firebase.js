// firebase.js
import { initializeApp } from "firebase/app";
import {
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";

// 🔹 Configuração do seu Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCXSFXwS-BYi9uSufqQJgboN5hbfh95IdE",
  authDomain: "conectabd-b58eb.firebaseapp.com",
  projectId: "conectabd-b58eb",
  storageBucket: "conectabd-b58eb.appspot.com",
  messagingSenderId: "347595217563",
  appId: "1:347595217563:web:cb685efa1c92462883443e",
};

// 🔹 Inicializa o app
const app = initializeApp(firebaseConfig);

// 🔹 Inicializa autenticação com persistência no AsyncStorage
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

// 🔹 Inicializa o Firestore
const db = getFirestore(app);

// ✅ Teste: mostra no console o nome do usuário autenticado (se houver)
if (auth.currentUser) {
  console.log("Usuário autenticado:", auth.currentUser.displayName);
} else {
  console.log("Nenhum usuário autenticado no momento.");
}

export { app, auth, db };
