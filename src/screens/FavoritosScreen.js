import React from "react";
import { View, Text, FlatList, SafeAreaView } from "react-native";
import CardPiloto from "../components/CardPiloto";
import favoritosStyles from "../styles/favoritosStyles";

const FavoritosScreen = ({ favoritos, removerFavorito }) => {
  return (
    <SafeAreaView style={favoritosStyles.safeArea}>
      <View style={favoritosStyles.container}>
        <Text style={favoritosStyles.title}>Favoritos</Text>
        {favoritos.length === 0 ? (
          <Text style={favoritosStyles.emptyText}>Nenhum piloto favoritado.</Text>
        ) : (
          <FlatList
            data={favoritos}
            keyExtractor={(item) => item.driverId}
            renderItem={({ item }) => (
              <CardPiloto piloto={item} removerFavorito={removerFavorito} />
            )}
            contentContainerStyle={favoritosStyles.flatListContent}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default FavoritosScreen;