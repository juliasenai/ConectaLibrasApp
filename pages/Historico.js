//Histórico
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useFonts } from "expo-font";
import Entypo from "@expo/vector-icons/Entypo";

export default function Historico({ navigation }) {
  const Voltar = () => {
    signOut(auth)
      .then(() => {
        navigation.replace("Menu");
      })
      .catch((error) => {
        alert(error.message);
      });
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
      <View style={styles.inicio}>
        <TouchableOpacity style={styles.botao} onPress={Voltar}>
          <Entypo name="chevron-small-left" size={70} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.titulo}>Histórico</Text>
      </View>
      <View style={styles.corpo}>
        <Text style={styles.titulo}>Histórico</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#01283C",
    paddingTop: 50,
    width: "100%",
    borderWidth: 2, // largura da borda
    borderColor: "blue", // cor da borda
    borderRadius: 10, // cantos arredondados
  },
  inicio: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    borderWidth: 2, // largura da borda
    borderColor: "blue", // cor da borda
    borderRadius: 10, // cantos arredondados
  },
  titulo: {
    fontSize: 50,
    marginBottom: 20,
    color: "#fff",
    fontFamily: "titulos",
    marginTop: 20,
    borderWidth: 2, // largura da borda
    borderColor: "blue", // cor da borda
    borderRadius: 10, // cantos arredondados
  },
  botao: {
    backgroundColor: "#000",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 40,
    height: "80%",
    width: "100%",
    borderWidth: 2, // largura da borda
    borderColor: "blue", // cor da borda
    borderRadius: 10, // cantos arredondados
  },
  corpo: {
    marginRight: 20,
    borderWidth: 2, // largura da borda
    borderColor: "blue", // cor da borda
    borderRadius: 10, // cantos arredondados
  },
});
