import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const CardPiloto = ({ piloto, adicionarAosFavoritos, removerFavorito }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{piloto.name}</Text>
      <Text style={styles.info}>{piloto.nationality}</Text>
      <TouchableOpacity style={styles.button} onPress={() => adicionarAosFavoritos(piloto)}>
        <Text style={styles.buttonText}>⭐ Favorito</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: { padding: 15, margin: 10, backgroundColor: "#ddd", borderRadius: 8 },
  name: { fontSize: 18, fontWeight: "bold" },
  info: { fontSize: 14, color: "#555" },
  button: { backgroundColor: "#f39c12", padding: 10, marginTop: 10, borderRadius: 5 },
  buttonText: { color: "#fff", fontWeight: "bold" },
});

export default CardPiloto;
