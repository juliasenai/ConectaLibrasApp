//Principal
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { useFonts } from "expo-font";
import Feather from "@expo/vector-icons/Feather";

export default function Principal({ navigation }) {
  const handlePrincipal = () => {
    navigation.navigate("Menu");
  };

  const [fontsLoaded] = useFonts({
    titulos: require("../assets/fonts/gliker-regular.ttf"),
    textos: require("../assets/fonts/sanchez-font.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#4C7DFF" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Conecta Libras</Text>
      <TouchableOpacity style={styles.botao} onPress={handlePrincipal}>
        <Feather name="menu" size={24} color="#fff" />
      </TouchableOpacity>
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
  titulo: {
    fontSize: 24,
    marginBottom: 20,
    color: "#fff",
    fontFamily: "titulos",
  },
  botao: {
    backgroundColor: "#000",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
});