import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import CardPiloto from "../components/CardPiloto";

const FavoritosScreen = ({ favoritos, removerFavorito }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favoritos</Text>
      {favoritos.length === 0 ? (
        <Text style={styles.emptyText}>Nenhum piloto favoritado.</Text>
      ) : (
        <FlatList
          data={favoritos}
          keyExtractor={(item) => item.driverId}
          renderItem={({ item }) => (
            <CardPiloto piloto={item} removerFavorito={removerFavorito} />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 10 },
  emptyText: { textAlign: "center", color: "#888" },
});

export default FavoritosScreen;