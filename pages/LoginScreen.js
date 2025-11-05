// LoginScreen.js
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
      {/* topo azul com logo */}
      <View style={styles.header}>
        <Image
          source={require("../assets/img/Login.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* campos de entrada */}
      <View style={styles.form}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          placeholder="@HumptyDumpty"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          style={styles.input}
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          placeholder="********"
          placeholderTextColor="#999"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
          style={styles.input}
        />

        <TouchableOpacity style={styles.botao} onPress={handleLogin}>
          <Text style={styles.textoBotao}>Entrar</Text>
        </TouchableOpacity>
      </View>

      {/* separador e login social */}
      <View style={styles.orContainer}>
        <Text style={styles.orText}>-Ou-</Text>
      </View>

      {/* imagens dos logins sociais */}
      <View style={styles.socialContainer}>
        <TouchableOpacity>
          <Image
            source={require("../assets/img/Google.png")}
            style={styles.socialIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            source={require("../assets/img/face.png")}
            style={styles.socialIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            source={require("../assets/img/apple.png")}
            style={styles.socialIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      {/* link de cadastro */}
      <View style={styles.footer}>
        <Text style={styles.textoSimples}>Não tem uma conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
          <Text style={styles.linkCadastro}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    backgroundColor: "#01283C",
    alignItems: "center",
    borderBottomLeftRadius: 300,
    borderBottomRightRadius: 300,
    paddingTop: 50,
    paddingBottom: 30,
  },
  logo: {
    width: 800,
    height: 500,
  },
  titulo: {
    color: "#fff",
    fontSize: 28,
    fontFamily: "titulos",
    marginTop: 10,
  },
  form: {
    marginTop: 30,
    paddingHorizontal: 25,
  },
  label: {
    color: "#01283C",
    fontSize: 35,
    fontFamily: "titulos",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1.3,
    borderColor: "#A7C7E7",
    borderRadius: 16,
    padding: 22,
    marginBottom: 15,
    backgroundColor: "#fff",
    fontFamily: "textos",
    fontSize:24,
  },
  botao: {
    backgroundColor: "#FFBE1D",
    borderRadius: 16,
    paddingVertical: 20,
    marginTop: 10,
  },
  textoBotao: {
    textAlign: "center",
    fontSize: 29,
    fontFamily: "titulos",
    color: "#01283C",
  },
  orContainer: {
    alignItems: "center",
    marginVertical: 10,
  },
  orText: {
    fontFamily: "titulos",
    fontSize: 16,
    color: "#999",
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginHorizontal: 60,
    marginTop: 10,
  },
  socialIcon: {
    width: 45,
    height: 45,
  },
  footer: {
    alignItems: "center",
    marginTop: 20,
  },
  textoSimples: {
    color: "#01283C",
    fontSize: 16,
    fontFamily: "textos",
  },
  linkCadastro: {
    color: "#419EBD",
    fontSize: 16,
    fontFamily: "titulos",
    textDecorationLine: "underline",
    marginTop: 5,
  },
});
