//Cadastro
import React, { useState } from "react";
import { View, TextInput, Button, Alert, Text, StyleSheet, ActivityIndicator, TouchableOpacity } from "react-native";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { useFonts } from 'expo-font';

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
      "titulos": require('./assets/fonts/gliker-regular.ttf'),
      "textos": require('./assets/fonts/sanchez-font.ttf'),
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
      <Text style={styles.titulo}>Cadastro</Text>

      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
        style={styles.input}
      />

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        style={styles.input}
      />

      <TextInput
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        style={styles.input}
      />

      <Button title="Cadastrar" onPress={handleCadastro} />

      <View style={styles.botaoContainer}>
        <Button title="Voltar para Login" onPress={() => navigation.navigate("Login")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  titulo: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
  },
  input: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#888",
    padding: 8,
    fontSize: 16,
  },
  botaoContainer: {
    marginTop: 10,
  },
});
