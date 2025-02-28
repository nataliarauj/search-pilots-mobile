import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import FavoritosScreen from "../screens/FavoritosScreen";
import CircuitosScreen from "../screens/CircuitosScreen";
import SobreScreen from "../screens/SobreScreen";

const Tab = createBottomTabNavigator();

const TabNavigator = ({
  todosPilotos,
  favoritos,
  searchTerm,
  loading,
  fetchPilotos,
  adicionarFavorito,
  removerFavorito,
  setSearchTerm,
}) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Início") {
            iconName = "home";
          } else if (route.name === "Favoritos") {
            iconName = "heart";
          } else if (route.name === "Circuitos") {
            iconName = "map";
          } else if (route.name === "Sobre") {
            iconName = "information-circle";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Início">
        {(props) => (
          <HomeScreen
            {...props}
            todosPilotos={todosPilotos}
            searchTerm={searchTerm}
            loading={loading}
            fetchPilotos={fetchPilotos}
            setSearchTerm={setSearchTerm}
            adicionarFavorito={adicionarFavorito}
          />
        )}
      </Tab.Screen>
      <Tab.Screen name="Favoritos">
        {(props) => (
          <FavoritosScreen
            {...props}
            favoritos={favoritos}
            removerFavorito={removerFavorito}
          />
        )}
      </Tab.Screen>
      <Tab.Screen name="Circuitos" component={CircuitosScreen} />

      {}
      <Tab.Screen name="Sobre" component={SobreScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
