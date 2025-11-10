// Histórico
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
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

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
      {/* Cabeçalho */}
      <View style={styles.inicio}>
        <TouchableOpacity style={styles.botao} onPress={Voltar}>
          <Entypo name="chevron-small-left" size={70} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.titulo}>Histórico</Text>
      </View>

      {/* Corpo */}
      <View style={styles.corpo}>
        {/* Dia 10/11 */}
        <Text style={styles.diaTitulo}>Dia 10/11</Text>

        <View style={styles.item}>
          <FontAwesome6 name="hands" size={35} color="#fff" />
          <Text style={styles.itemTexto}>Hoje o dia foi tão corrido que mal consegui almoçar.</Text>
        </View>

        <View style={styles.item}>
          <Feather name="volume-2" size={35} color="#fff" />
          <Text style={styles.itemTexto}>Você viu aquele filme novo que estreou no cinema?</Text>
        </View>

        <View style={styles.item}>
          <MaterialIcons name="keyboard" size={35} color="#fff" />
          <Text style={styles.itemTexto}>Você pode me explicar de novo? Acho que não entendi direito.</Text>
        </View>

        <View style={styles.linha} />

        {/* Dia 11/11 (exemplo de outro dia) */}
        <Text style={styles.diaTitulo}>Dia 11/11</Text>

        <View style={styles.item}>
          <FontAwesome6 name="hands" size={35} color="#fff" />
          <Text style={styles.itemTexto}>Me avisa quando chegar em casa, só pra eu saber.</Text>
        </View>

        <View style={styles.item}>
          <Feather name="volume-2" size={35} color="#fff" />
          <Text style={styles.itemTexto}>A professora pediu pra entregar o trabalho até sexta-feira cedo.</Text>
        </View>

        <View style={styles.item}>
          <MaterialIcons name="keyboard" size={35} color="#fff" />
          <Text style={styles.itemTexto}>Não sei o que fazer agora, tô completamente sem ideia.</Text>
        </View>
        <View style={styles.linha} />

        {/* Dia 11/11 (exemplo de outro dia) */}
        <Text style={styles.diaTitulo}>Dia 12/11</Text>

        <View style={styles.item}>
          <FontAwesome6 name="hands" size={35} color="#fff" />
          <Text style={styles.itemTexto}>Se chover amanhã, podemos ficar em casa vendo série juntos.</Text>
        </View>

        <View style={styles.item}>
          <Feather name="volume-2" size={35} color="#fff" />
          <Text style={styles.itemTexto}>Eu gostei muito da sua ideia, ficou bem criativa mesmo.</Text>
        </View>

        <View style={styles.item}>
          <MaterialIcons name="keyboard" size={35} color="#fff" />
          <Text style={styles.itemTexto}>Ontem encontrei o pessoal da escola e foi super divertido.</Text>
        </View>
        <View style={styles.linha} />

        {/* Dia 11/11 (exemplo de outro dia) */}
        <Text style={styles.diaTitulo}>Dia 13/11</Text>

        <View style={styles.item}>
          <FontAwesome6 name="hands" size={35} color="#fff" />
          <Text style={styles.itemTexto}>Quando eu era pequeno, adorava brincar na rua até tarde.</Text>
        </View>

        <View style={styles.item}>
          <Feather name="volume-2" size={35} color="#fff" />
          <Text style={styles.itemTexto}>Já mandei a mensagem pra ela, mas ainda não respondeu.</Text>
        </View>

        <View style={styles.item}>
          <MaterialIcons name="keyboard" size={35} color="#fff" />
          <Text style={styles.itemTexto}>Eu estava pensando em viajar no fim de semana com você.</Text>
        </View>
        <View style={styles.linha} />

        {/* Rodapé */}
        <Text style={styles.rodape}>CONECTA LIBRAS</Text>
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
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    flex: 1,
    width: "100%",
    marginTop: 50,
    padding: 30,
  },
  diaTitulo: {
    fontSize: 40,
    color: "#FFBE1D",
    fontFamily: "textos",
    marginBottom: 20,
    marginLeft:40,
    fontWeight:100,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    marginLeft:40,
  },
  itemTexto: {
    color: "#fff",
    fontSize: 28.4,
    marginLeft:10,
    fontFamily: "textos",
    marginLeft:25,
  },
  linha: {
    height: 2,
    backgroundColor: "#848484ff",
    width: 700,
    marginVertical: 10,
    marginTop:40,
    marginBottom:40,
  },
  rodape: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    color: "#fff",
    fontFamily: "textos",
    fontSize: 14,
  },
});
