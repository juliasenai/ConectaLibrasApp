//Cadastro
import React, { useState } from "react";
import {
  View,
  TextInput,
  Alert,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { useFonts } from "expo-font";

export default function CadastroScreen({ navigation }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleCadastro = () => {
    if (!nome || !email || !senha) {
      Alert.alert("Erro", "Preencha todos os campos");
      return;
    }

    createUserWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        updateProfile(userCredential.user, { displayName: nome })
          .then(() => {
            navigation.replace("Home");
          })
          .catch((error) => {
            Alert.alert("Erro ao salvar nome", error.message);
          });
      })
      .catch((error) => {
        Alert.alert("Erro", error.message);
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
      <Text style={styles.titulo}>Cadastro</Text>

      <View>
        <Text style={styles.textoCampo}>Nome:</Text>
        <TextInput
          placeholder="Nome"
          value={nome}
          onChangeText={setNome}
          style={styles.input}
        />
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

      <TouchableOpacity style={styles.botao} onPress={handleCadastro}>
        <Text style={styles.textoBotao}>Cadastrar</Text>
      </TouchableOpacity>

      <View style={styles.containerVoltar}>
        <Text style={styles.textoSimples}>Já tem uma conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.textoBotao2}>Fazer login!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 40,
    marginBottom: 40,
    textAlign: "center",
    color: "#01283C",
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
    marginTop: 10,
  },
  textoBotao: {
    color: "#01283C",
    fontSize: 18,
    fontFamily: "titulos",
    textAlign: "center",
  },
  containerVoltar: {
    alignItems: "center",
    marginTop: 20,
  },
  textoSimples: {
    color: "#01283C",
    fontSize: 16,
    fontFamily: "textos",
    textAlign: "center",
    marginBottom: 10,
  },
  textoBotao2: {
    color: "#01283C",
    fontSize: 18,
    fontFamily: "titulos",
    textAlign: "center",
    textDecorationLine: "underline",
  },
});