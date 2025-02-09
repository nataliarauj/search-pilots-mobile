import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const CardPiloto = ({ piloto, adicionarFavorito, removerFavorito }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.nome}>{piloto.name}</Text>
      <Text style={styles.nacionalidade}>{piloto.nationality}</Text>
      {adicionarFavorito && (
        <Button title="Favoritar" onPress={() => adicionarFavorito(piloto)} />
      )}
      {removerFavorito && (
        <Button title="Remover" onPress={() => removerFavorito(piloto.driverId)} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  nome: {
    fontSize: 18,
    fontWeight: "bold",
  },
  nacionalidade: {
    fontSize: 14,
    color: "#666",
  },
});

export default CardPiloto;