import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import axios from "axios";
import Constants from "expo-constants";
import TabNavigator from "./src/navigation/TabNavigator.js";

const App = () => {
  const [todosPilotos, setTodosPilotos] = useState([]);
  const [favoritos, setFavoritos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  const gerarIdUnico = (piloto) => {
    return `${piloto.name}-${piloto.nationality}`
      .toLowerCase()
      .replace(/\s+/g, "-");
  };

  // Chaves da API
  const API_KEY = Constants.expoConfig.extra.apiKey;
  const API_HOST = Constants.expoConfig.extra.apiHost;

  // Função para buscar pilotos
  const fetchPilotos = async (nome) => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://v1.formula-1.api-sports.io/drivers",
        {
          headers: {
            "x-rapidapi-key": API_KEY,
            "x-rapidapi-host": API_HOST,
          },
          params: { search: nome },
        }
      );

      const dadosPilotos = response.data.response || [];
      const pilotosComId = dadosPilotos.map((piloto) => ({
        ...piloto,
        driverId: gerarIdUnico(piloto),
      }));

      setTodosPilotos(pilotosComId);
    } catch (error) {
      console.error("Erro ao buscar os pilotos:", error);
    } finally {
      setLoading(false);
    }
  };

  const adicionarFavorito = (piloto) => {
    setFavoritos((prevFavoritos) => [...prevFavoritos, piloto]);
  };

  const removerFavorito = (pilotoId) => {
    setFavoritos((prevFavoritos) =>
      prevFavoritos.filter((piloto) => piloto.driverId !== pilotoId)
    );
  };

  return (
    <NavigationContainer>
      <TabNavigator
        todosPilotos={todosPilotos}
        favoritos={favoritos}
        searchTerm={searchTerm}
        loading={loading}
        fetchPilotos={fetchPilotos}
        adicionarFavorito={adicionarFavorito}
        removerFavorito={removerFavorito}
        setSearchTerm={setSearchTerm}
      />
    </NavigationContainer>
  );
};

export default App;
