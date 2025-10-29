//LoginScreen
import React, { useState } from "react";
import {
  View,
  TextInput,
  Alert,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useFonts } from "expo-font";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = () => {
    if (!email || !senha) {
      Alert.alert("Erro", "Preencha todos os campos");
      return;
    }

    signInWithEmailAndPassword(auth, email, senha)
      .then(() => {
        navigation.replace("Home");
      })
      .catch((error) => {
        Alert.alert("Erro", error.message);
      });
  };

  const [fontsLoaded] = useFonts({
    titulos: require("./assets/fonts/gliker-regular.ttf"),
    textos: require("./assets/fonts/sanchez-font.ttf"),
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
      <View style={styles.containerImagem}>
        <View style={styles.imagemCaixa1}>
          <Image
            source={require("./assets/img/circulo1.png")}
            style={styles.imagem1}
          />
        </View>
        <Image
          source={require("./assets/img/Logo1.png")}
          style={styles.imagem2}
        />
        <Text style={styles.titulo}>Login</Text>
      </View>
      <View>
        <Text style={styles.textoCampo}>Email:</Text>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          style={styles.input}
        />
      </View>
      <View>
        <Text style={styles.textoCampo}>Senha:</Text>
        <TextInput
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
          style={styles.input}
        />
      </View>
      <TouchableOpacity style={styles.botao} onPress={handleLogin}>
        <Text style={styles.textoBotao}>Vamos começar!</Text>
      </TouchableOpacity>
      <View style={styles.containerCadastro}>
        <Text style={styles.textoBotao}>Não tem uma conta?</Text>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate("Cadastro")}
        >
          <Text style={styles.textoBotao2}>Criar uma conta!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#fff",
  },
  containerImagem: {
    justifyContent: "flex-start",
    marginBottom: 20,
    height: 403,
  },
  containerCadastro: {
    alignItems: "center",
    marginTop: 20,
  },
  imagemCaixa1: {
    alignItems: "center",
    width: "100%",
    height: 400,
    position: "relative",
  },
  imagem1: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  imagem2: {
    width: "90%",
    height: 230,
    position: "absolute",
    right: 20,
    top: 20,
  },
  titulo: {
    fontSize: 40,
    marginBottom: 20,
    position: "absolute",
    left: 155,
    top: 270,
    color: "#fff",
    fontFamily: "titulos",
  },
  input: {
    marginBottom: 20,
    borderBottomWidth: 1,
    padding: 8,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#419EBD",
    marginBottom: 10,
    marginHorizontal: 10,
    fontFamily: "textos",
    borderRadius: 15,
  },
  textoCampo: {
    color: "#01283C",
    fontSize: 20,
    fontFamily: "titulos",
    marginBottom: 10,
    marginTop: 10,
    marginHorizontal: 20,
  },
  botao: {
    backgroundColor: "#FFBE1D",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginHorizontal: 10,
  },
  textoBotao: {
    color: "#01283C",
    fontSize: 18,
    fontFamily: "titulos",
    textAlign: "center",
  },
  textoBotao2: {
    color: "#01283C",
    fontSize: 18,
    fontFamily: "titulos",
    textAlign: "center",
    textDecorationLine: "underline",
  },
});