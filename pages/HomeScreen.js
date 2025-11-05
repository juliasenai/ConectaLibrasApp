// HomeScreen.js
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ActivityIndicator,
} from "react-native";
import { useFonts } from "expo-font";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { app } from "../firebase"; // <-- importa tua config do Firebase

export default function HomeScreen({ navigation }) {
  const [fontsLoaded] = useFonts({
    titulos: require("../assets/fonts/gliker-regular.ttf"),
    textos: require("../assets/fonts/sanchez-font.ttf"),
  });

  const [userName, setUserName] = useState(""); // guarda o nome do usuário
  const [loading, setLoading] = useState(true);

  const auth = getAuth(app);
  const db = getFirestore(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // pega o documento do usuário no Firestore
        const docRef = doc(db, "usuarios", user.uid); // muda "usuarios" se teu nome da coleção for outro
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUserName(docSnap.data().nome || "Usuário");
        } else {
          setUserName("Usuário");
        }
      } else {
        setUserName("Visitante");
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const handleIntro = () => {
    navigation.replace("Principal");
  };

  if (!fontsLoaded || loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4C7DFF" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/img/Logo2.png")}
        style={styles.imagem}
      />
      <Text style={styles.titulo}>Olá, {userName}!</Text>

      <Text style={styles.texto}>
        Transcreva fala em libras, texto em fala ou vice-versa. Nosso app ajuda
        na comunicação de pessoas com deficiência auditiva!
      </Text>

      <TouchableOpacity style={styles.botao} onPress={handleIntro}>
        <Text style={styles.textoBotao}>Vamos começar!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#01283C",
  },
  imagem: {
    width: "100%",
    height: 400,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 30,
    marginBottom: 20,
    color: "#fff",
    fontFamily: "titulos",
    textAlign: "center",
  },
  texto: {
    fontSize: 25,
    marginBottom: 15,
    color: "#fff",
    fontFamily: "textos",
    textAlign: "center",
    paddingHorizontal: 20,
  },
  botao: {
    backgroundColor: "#FFBE1D",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  textoBotao: {
    color: "#01283C",
    fontSize: 25,
    fontFamily: "titulos",
  },
});
