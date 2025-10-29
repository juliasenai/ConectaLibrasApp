//Principal
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ActivityIndicator } from "react-native";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useFonts } from "expo-font";

export default function BoasVindas() {

  const [fontsLoaded] = useFonts({
    "titulos": require("./assets/fonts/gliker-regular.ttf"),
    "textos": require("./assets/fonts/sanchez-font.ttf"),
  });

if (!fontsLoaded) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size="large" color="#4C7DFF" />
    </View>
  );
}

  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/img/Logo2.png")}
        style={styles.imagem}
      />
      <Text style={styles.titulo}>Sua comunicação no Conecta Libras</Text>
      <Text style={styles.texto}>
        Transcreva fala em libras, texto em fala ou vice-versa, nos propomos a
        auxiliar a comunicação de deficientes auditivos em ambiente escolar e na
        vida!
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#01283C",
  },
  imagem: {
    width: 150,
    height: 150,
  },
  titulo: {
    fontSize: 24,
    marginBottom: 20,
    color: "#fff",
    fontFamily: "titulos",
  },
  texto: {
    fontSize: 24,
    marginBottom: 20,
    color: "#fff",
    fontFamily: "textos",
  },
  botao: {
    backgroundColor: "#FFBE1D",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  textoBotao: {
    color: "#01283C",
    fontSize: 18,
    fontFamily: "titulos",
  },
});
