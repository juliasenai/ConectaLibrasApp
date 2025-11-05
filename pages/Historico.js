//Histórico
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { useFonts } from "expo-font";
import Entypo from "@expo/vector-icons/Entypo";

export default function Historico({ navigation }) {
  const Voltar = () => {
    navigation.goBack();
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
        <Text style={styles.texto}>Dia 1</Text>
        <View style={styles.libras}>
          <Text style={styles.conteudo}>Dia 1</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#01283C",
    paddingTop: 50,
    width: "100%",
  },
  inicio: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
  titulo: {
    fontSize: 50,
    color: "#fff",
    fontFamily: "titulos",
    marginTop: 30,
  },
  botao: {
    marginTop: 35,
    paddingLeft: 50,
  },
  corpo: {
    backgroundColor: "#000",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: "100%",
    width: "100%",
    marginRight: 20,
    marginTop: 50,
  },
  texto: {
    fontSize: 50,
    marginBottom: 20,
    color: "#fff",
    fontFamily: "textos",
    marginTop: 20,
    paddingLeft: 50,
  },
  libras: {
    fontSize: 50,
    marginBottom: 20,
    color: "#fff",
    fontFamily: "textos",
    marginTop: 20,
    paddingLeft: 50,
  },
  conteudo: {
    fontSize: 50,
    marginBottom: 20,
    color: "#fff",
    fontFamily: "textos",
    marginTop: 20,
    paddingLeft: 50,
  },
});