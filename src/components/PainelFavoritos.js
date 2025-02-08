import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";

const PainelFavoritos = ({ favoritos, removerFavorito }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favoritos</Text>
      <FlatList
        data={favoritos}
        keyExtractor={(item) => item.driverId}
        renderItem={({ item }) => (
          <View style={styles.favCard}>
            <Text style={styles.favText}>{item.name}</Text>
            <TouchableOpacity onPress={() => removerFavorito(item)}>
              <Text style={styles.removeText}>❌</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  favCard: { flexDirection: "row", justifyContent: "space-between", padding: 10, backgroundColor: "#ddd", marginBottom: 5, borderRadius: 5 },
  favText: { fontSize: 16 },
  removeText: { color: "red", fontWeight: "bold" },
});

export default PainelFavoritos;
