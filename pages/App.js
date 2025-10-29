//App
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./LoginScreen";
import CadastroScreen from "./CadastroScreen";
import HomeScreen from "./HomeScreen";
import Principal from "./Principal";
import BoasVindas from "./BoasVindas";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Principal" component={Principal} />
        <Stack.Screen name="BoasVindas" component={BoasVindas} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
