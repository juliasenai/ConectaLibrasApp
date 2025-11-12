// Histórico
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { useFonts } from "expo-font";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { db } from "../firebase"; // <-- importa sua conexão Firebase
import { doc, getDoc } from "firebase/firestore";

export default function Historico({ navigation }) {
  const [conteudo, setConteudo] = useState("");
  const [atualizadoEm, setAtualizadoEm] = useState("");
  const [loading, setLoading] = useState(true);

  const Voltar = () => navigation.goBack();

  const [fontsLoaded] = useFonts({
    titulos: require("../assets/fonts/gliker-regular.ttf"),
    textos: require("../assets/fonts/sanchez-font.ttf"),
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "conectaBD", "conversas", "1"); 
        // 🔹 estrutura: conectaBD > conversas > 1
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setConteudo(docSnap.data().conteudo);
          setAtualizadoEm(docSnap.data().atualizadoEm);
        } else {
          console.log("Documento não encontrado!");
        }
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (!fontsLoaded || loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#4C7DFF" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.inicio}>
        <TouchableOpacity style={styles.botao} onPress={Voltar}>
          <Entypo name="chevron-small-left" size={70} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.titulo}>Histórico</Text>
      </View>

      {/* Corpo com Scroll */}
      <ScrollView style={styles.corpo} showsVerticalScrollIndicator={false}>
        <Text style={styles.diaTitulo}>{atualizadoEm}</Text>

        <View style={styles.item}>
          <FontAwesome6 name="hands" size={24} color="#fff" />
          <Text style={styles.itemTexto}>(10 primeiras palavras da frase)</Text>
        </View>
        <View style={styles.linha} />

        <View style={styles.item}>
          <Feather name="volume-2" size={24} color="#fff" />
          <Text style={styles.itemTexto}>(10 primeiras palavras da frase)</Text>
        </View>
        <View style={styles.linha} />

        <View style={styles.item}>
          <MaterialIcons name="keyboard" size={24} color="#fff" />
          <Text style={styles.itemTexto}>{conteudo}</Text>
        </View>
        <View style={styles.linha} />

        <Text style={styles.rodape}>CONECTA LIBRAS</Text>
      </ScrollView>
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
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    flex: 1,
    width: "100%",
    marginTop: 50,
    padding: 30,
  },
  diaTitulo: {
    fontSize: 32,
    color: "#fff",
    fontFamily: "textos",
    marginBottom: 20,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  itemTexto: {
    color: "#fff",
    fontSize: 18,
    marginLeft: 15,
    fontFamily: "textos",
    flexShrink: 1,
  },
  linha: {
    height: 1,
    backgroundColor: "#333",
    width: "100%",
    marginVertical: 10,
  },
  rodape: {
    textAlign: "center",
    color: "#fff",
    fontFamily: "textos",
    fontSize: 14,
    marginTop: 30,
  },
});
