// import React, { useState, useEffect } from "react";
// import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Image, FlatList, StyleSheet } from "react-native";
// import { fetchPilotos } from "../services/api";
// import CardPiloto from "../components/CardPiloto";
// import PainelFavoritos from "../components/PainelFavoritos";

// const HomeScreen = () => {
//   const [todosPilotos, setTodosPilotos] = useState([]);
//   const [favoritos, setFavoritos] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [loading, setLoading] = useState(false);

//   const pesquisarPilotos = async () => {
//     if (searchTerm.trim() === "") return;
//     setLoading(true);
//     try {
//       const pilotos = await fetchPilotos(searchTerm);
//       setTodosPilotos(pilotos);
//     } catch (error) {
//       console.error("Erro ao buscar pilotos:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const adicionarAosFavoritos = (piloto) => {
//     setFavoritos((prev) => 
//       prev.some((fav) => fav.driverId === piloto.driverId) ? prev : [...prev, piloto]
//     );
//   };

//   const removerFavorito = (piloto) => {
//     setFavoritos((prev) => prev.filter((fav) => fav.driverId !== piloto.driverId));
//   };

//   return (
//     <View style={styles.container}>
//       <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/2418/2418779.png" }} style={styles.logo} />
//       <Text style={styles.title}>Pesquisa de Pilotos</Text>
//       <View style={styles.searchContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Digite o nome do piloto"
//           value={searchTerm}
//           onChangeText={setSearchTerm}
//           onSubmitEditing={pesquisarPilotos}
//         />
//         <TouchableOpacity style={styles.searchButton} onPress={pesquisarPilotos} disabled={loading}>
//           {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>🔍</Text>}
//         </TouchableOpacity>
//       </View>

//       <FlatList
//         data={todosPilotos}
//         keyExtractor={(item) => item.driverId}
//         renderItem={({ item }) => (
//           <CardPiloto piloto={item} adicionarAosFavoritos={adicionarAosFavoritos} removerFavorito={removerFavorito} />
//         )}
//       />

//       <PainelFavoritos favoritos={favoritos} removerFavorito={removerFavorito} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, alignItems: "center", padding: 20 },
//   logo: { width: 100, height: 100, marginBottom: -30 },
//   title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
//   searchContainer: { flexDirection: "row", marginBottom: 20, width: "100%" },
//   input: { flex: 1, borderWidth: 1, borderColor: "#ccc", padding: 10, borderRadius: 8 },
//   searchButton: { padding: 10, backgroundColor: "#333", borderRadius: 8, marginLeft: 10 },
//   buttonText: { color: "#fff", fontSize: 18 },
// });

// export default HomeScreen;

import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, FlatList, ActivityIndicator, StyleSheet } from "react-native";
import axios from "axios";
import Constants from "expo-constants";
import CardPiloto from "../components/CardPiloto";
import homeStyles from "../styles/homeStyles";

const HomeScreen = () => {
  const [todosPilotos, setTodosPilotos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  const API_KEY = Constants.expoConfig.extra.apiKey;
  const API_HOST = Constants.expoConfig.extra.apiHost;

  const fetchPilotos = async (nome) => {
    try {
      setLoading(true);
      const response = await axios.get("https://v1.formula-1.api-sports.io/drivers", {
        headers: {
          "x-rapidapi-key": API_KEY,
          "x-rapidapi-host": API_HOST,
        },
        params: { search: nome },
      });

      setTodosPilotos(response.data.response || []);
    } catch (error) {
      console.error("Erro ao buscar os pilotos:", error);
    } finally {
      setLoading(false);
    }
  };

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
      <Button title="Buscar" onPress={() => fetchPilotos(searchTerm)} disabled={loading} />
      
      {loading && <ActivityIndicator size="large" color="red" />}

      <FlatList
        data={todosPilotos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <CardPiloto piloto={item} />}
      />
    </View>
  );
};

export default HomeScreen;
