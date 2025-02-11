import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const equipe = [
  { id: "1", nome: "Natália Araújo", funcao: "Dev & Designer" },
  { id: "2", nome: "Alex de Lucena", funcao: "Dev & Designer" },
  { id: "3", nome: "Cláudio Jr.", funcao: "Dev & Designer" },
];

const SobreScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/icons/search-icon.png")}
        style={styles.logo}
      />

      <Text style={styles.titulo}>Search Pilots</Text>
      <Text style={styles.descricao}>
        O F1 Search Pilots é um aplicativo desenvolvido para facilitar a busca
        por pilotos da Fórmula 1. Com ele, você pode pesquisar pilotos pelo nome
        ou sobrenome, adicionar seus favoritos e explorar um mapa interativo com
        todas as pistas de grau 1 da FIA. Ideal para fãs de automobilismo! 🏎️
      </Text>

      <Text style={styles.subtitulo}>Equipe 👩🏻‍💻👨🏻‍💻</Text>

      {equipe.map((membro) => (
        <Text key={membro.id} style={styles.membro}>
          {membro.nome} - {membro.funcao}
        </Text>
      ))}

      <Image
        source={require("../../assets/icons/heart-icon.png")}
        style={styles.heartIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f4f4f4",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
    marginTop: 50,
  },
  titulo: { fontSize: 22, fontWeight: "bold" },
  descricao: { fontSize: 16, textAlign: "center", marginVertical: 10 },
  subtitulo: { fontSize: 18, fontWeight: "bold", marginTop: 20 },
  membro: { fontSize: 16, marginVertical: 5 },
  heartIcon: {
    width: 45,
    height: 45,
    marginTop: 20,
  },
});

export default SobreScreen;
