import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import CardPiloto from "../components/CardPiloto";
import homeStyles from "../styles/homeStyles";

const HomeScreen = ({
  todosPilotos,
  searchTerm,
  loading,
  fetchPilotos,
  setSearchTerm,
  adicionarFavorito,
}) => {
  return (
    <View style={homeStyles.container}>
      <Text style={homeStyles.title}>Pesquisa de Pilotos</Text>
      <TextInput
        style={homeStyles.input}
        placeholder="Digite o nome do piloto"
        value={searchTerm}
        onChangeText={setSearchTerm}
        onSubmitEditing={() => fetchPilotos(searchTerm)}
      />
      <Button
        title="Buscar"
        onPress={() => fetchPilotos(searchTerm)}
        disabled={loading}
      />

      {loading && <ActivityIndicator size="large" color="red" />}

      <FlatList
        data={todosPilotos}
        keyExtractor={(item) => item.driverId}
        renderItem={({ item }) => (
          <CardPiloto piloto={item} adicionarFavorito={adicionarFavorito} />
        )}
      />
    </View>
  );
};

export default HomeScreen;
