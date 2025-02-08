import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen.js";
import axios from "axios";
import Constants from "expo-constants";
import CardPiloto from "./src/components/CardPiloto";
import PainelFavoritos from "./src/components/PainelFavoritos";
import TabNavigator from "./src/navigation/TabNavigator.js";


const Stack = createStackNavigator();

const App = () => {
  const [todosPilotos, setTodosPilotos] = useState([]);
  const [favoritos, setFavoritos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  const gerarIdUnico = (piloto) => {
    return `${piloto.name}-${piloto.nationality}`.toLowerCase().replace(/\s+/g, "-");
  };

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

  // return (
  //   <NavigationContainer>
  //     <Stack.Navigator screenOptions={{ headerShown: false }}>
  //       <Stack.Screen name="Home" component={HomeScreen} />
  //     </Stack.Navigator>
  //   </NavigationContainer>
  // );

  return <TabNavigator/>
};

export default App;
