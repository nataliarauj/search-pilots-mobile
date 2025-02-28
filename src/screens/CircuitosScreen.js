import React from "react";
import { View, StyleSheet, Text } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";

const CircuitosScreen = () => {
  const circuitosData = [
    {
      id: 1,
      nome: "Interlagos",
      localizacao: "São Paulo, Brasil",
      latitude: -23.7034,
      longitude: -46.6992,
      comprimento: "4.309 km",
      curvas: 15,
      inauguracao: 1940,
    },
    {
      id: 2,
      nome: "Mônaco",
      localizacao: "Monte Carlo, Mônaco",
      latitude: 43.7347,
      longitude: 7.4206,
      comprimento: "3.337 km",
      curvas: 19,
      inauguracao: 1929,
    },
    {
      id: 3,
      nome: "Silverstone",
      localizacao: "Reino Unido",
      latitude: 52.0786,
      longitude: -1.0169,
      comprimento: "5.891 km",
      curvas: 18,
      inauguracao: 1950,
    },
    {
      id: 4,
      nome: "Monza",
      localizacao: "Itália",
      latitude: 45.6156,
      longitude: 9.2811,
      comprimento: "5.793 km",
      curvas: 11,
      inauguracao: 1922,
    },
    {
      id: 5,
      nome: "Spa-Francorchamps",
      localizacao: "Bélgica",
      latitude: 50.4372,
      longitude: 5.975,
      comprimento: "7.004 km",
      curvas: 19,
      inauguracao: 1921,
    },
    {
      id: 6,
      nome: "Suzuka",
      localizacao: "Japão",
      latitude: 34.8431,
      longitude: 136.541,
      comprimento: "5.807 km",
      curvas: 18,
      inauguracao: 1962,
    },
    {
      id: 7,
      nome: "Montreal",
      localizacao: "Canadá",
      latitude: 45.5088,
      longitude: -73.5542,
      comprimento: "4.361 km",
      curvas: 14,
      inauguracao: 1978,
    },
    {
      id: 8,
      nome: "Melbourne",
      localizacao: "Austrália",
      latitude: -37.8497,
      longitude: 144.968,
      comprimento: "5.278 km",
      curvas: 16,
      inauguracao: 1996,
    },
    {
      id: 9,
      nome: "Baku",
      localizacao: "Azerbaijão",
      latitude: 40.3725,
      longitude: 49.8533,
      comprimento: "6.003 km",
      curvas: 20,
      inauguracao: 2016,
    },
    {
      id: 10,
      nome: "Singapura",
      localizacao: "Singapura",
      latitude: 1.2915,
      longitude: 103.864,
      comprimento: "5.063 km",
      curvas: 19,
      inauguracao: 2008,
    },
    {
      id: 11,
      nome: "Yas Marina",
      localizacao: "Abu Dhabi, EAU",
      latitude: 24.4672,
      longitude: 54.6031,
      comprimento: "5.281 km",
      curvas: 16,
      inauguracao: 2009,
    },
    {
      id: 12,
      nome: "Austin",
      localizacao: "EUA",
      latitude: 30.1338,
      longitude: -97.6411,
      comprimento: "5.513 km",
      curvas: 20,
      inauguracao: 2012,
    },
    {
      id: 13,
      nome: "Nürburgring",
      localizacao: "Alemanha",
      latitude: 50.3356,
      longitude: 6.9475,
      comprimento: "5.148 km",
      curvas: 16,
      inauguracao: 1927,
    },
    {
      id: 14,
      nome: "Hockenheim",
      localizacao: "Alemanha",
      latitude: 49.3278,
      longitude: 8.5656,
      comprimento: "4.574 km",
      curvas: 17,
      inauguracao: 1932,
    },
    {
      id: 15,
      nome: "Shanghai",
      localizacao: "China",
      latitude: 31.3389,
      longitude: 121.22,
      comprimento: "5.451 km",
      curvas: 16,
      inauguracao: 2004,
    },
    {
      id: 16,
      nome: "Bahrain",
      localizacao: "Bahrain",
      latitude: 26.0325,
      longitude: 50.5106,
      comprimento: "5.412 km",
      curvas: 15,
      inauguracao: 2004,
    },
    {
      id: 17,
      nome: "Zandvoort",
      localizacao: "Holanda",
      latitude: 52.3886,
      longitude: 4.5408,
      comprimento: "4.259 km",
      curvas: 14,
      inauguracao: 1948,
    },
    {
      id: 18,
      nome: "Hungaroring",
      localizacao: "Hungria",
      latitude: 47.5839,
      longitude: 19.2486,
      comprimento: "4.381 km",
      curvas: 14,
      inauguracao: 1986,
    },
    {
      id: 19,
      nome: "Jeddah",
      localizacao: "Arábia Saudita",
      latitude: 21.6319,
      longitude: 39.1044,
      comprimento: "6.175 km",
      curvas: 27,
      inauguracao: 2021,
    },
    {
      id: 20,
      nome: "Imola",
      localizacao: "Itália",
      latitude: 44.3439,
      longitude: 11.7167,
      comprimento: "4.909 km",
      curvas: 19,
      inauguracao: 1953,
    },
    {
      id: 21,
      nome: "Paul Ricard",
      localizacao: "França",
      latitude: 43.2506,
      longitude: 5.7917,
      comprimento: "5.842 km",
      curvas: 15,
      inauguracao: 1970,
    },
    {
      id: 25,
      nome: "Sepang",
      localizacao: "Malásia",
      latitude: 2.7606,
      longitude: 101.7381,
      comprimento: "5.543 km",
      curvas: 15,
      inauguracao: 1999,
    },
    {
      id: 26,
      nome: "Adelaide",
      localizacao: "Austrália",
      latitude: -34.927,
      longitude: 138.601,
      comprimento: "3.780 km",
      curvas: 16,
      inauguracao: 1985,
    },
    {
      id: 27,
      nome: "Kyalami",
      localizacao: "África do Sul",
      latitude: -25.995,
      longitude: 28.074,
      comprimento: "4.529 km",
      curvas: 16,
      inauguracao: 1961,
    },
    {
      id: 28,
      nome: "Valência",
      localizacao: "Espanha",
      latitude: 39.4589,
      longitude: -0.3317,
      comprimento: "5.419 km",
      curvas: 25,
      inauguracao: 2008,
    },
    {
      id: 29,
      nome: "Magny-Cours",
      localizacao: "França",
      latitude: 46.8642,
      longitude: 3.1636,
      comprimento: "4.411 km",
      curvas: 17,
      inauguracao: 1960,
    },
    {
      id: 30,
      nome: "Detroit",
      localizacao: "EUA",
      latitude: 42.3295,
      longitude: -83.0402,
      comprimento: "4.023 km",
      curvas: 17,
      inauguracao: 1982,
    },
    {
      id: 31,
      nome: "Indianápolis",
      localizacao: "EUA",
      latitude: 39.795,
      longitude: -86.234,
      comprimento: "4.192 km",
      curvas: 13,
      inauguracao: 1909,
    },
    {
      id: 32,
      nome: "Las Vegas",
      localizacao: "EUA",
      latitude: 36.1683,
      longitude: -115.152,
      comprimento: "6.201 km",
      curvas: 17,
      inauguracao: 2023,
    },
    {
      id: 33,
      nome: "Aida",
      localizacao: "Japão",
      latitude: 34.855,
      longitude: 134.223,
      comprimento: "3.703 km",
      curvas: 12,
      inauguracao: 1994,
    },
    {
      id: 34,
      nome: "Fuji",
      localizacao: "Japão",
      latitude: 35.3717,
      longitude: 138.9275,
      comprimento: "4.563 km",
      curvas: 16,
      inauguracao: 1966,
    },
    {
      id: 35,
      nome: "Long Beach",
      localizacao: "EUA",
      latitude: 33.766,
      longitude: -118.189,
      comprimento: "3.427 km",
      curvas: 11,
      inauguracao: 1976,
    },
    {
      id: 36,
      nome: "Buenos Aires",
      localizacao: "Argentina",
      latitude: -34.6942,
      longitude: -58.4594,
      comprimento: "4.259 km",
      curvas: 15,
      inauguracao: 1953,
    },
    {
      id: 37,
      nome: "Pescara",
      localizacao: "Itália",
      latitude: 42.4643,
      longitude: 14.2147,
      comprimento: "25.579 km",
      curvas: 15,
      inauguracao: 1957,
    },
    {
      id: 38,
      nome: "Pedralbes",
      localizacao: "Espanha",
      latitude: 41.389,
      longitude: 2.118,
      comprimento: "6.316 km",
      curvas: 10,
      inauguracao: 1951,
    },
  ];

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 20,
          longitude: 0,
          latitudeDelta: 80,
          longitudeDelta: 80,
        }}
      >
        {circuitosData.map((circuito) => (
          <Marker
            key={circuito.id}
            coordinate={{
              latitude: circuito.latitude,
              longitude: circuito.longitude,
            }}
            title={circuito.nome}
          >
            <Callout>
              <View style={styles.callout}>
                <Text style={styles.nome}>{circuito.nome}</Text>
                <Text style={styles.localizacao}>{circuito.localizacao}</Text>
                <Text style={styles.detalhes}>
                  🏁 Comprimento: {circuito.comprimento}
                </Text>
                <Text style={styles.detalhes}>
                  🔄 Curvas: {circuito.curvas}
                </Text>
                <Text style={styles.detalhes}>
                  📅 Inauguração: {circuito.inauguracao}
                </Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  callout: {
    width: 200,
    padding: 5,
  },
  nome: {
    fontSize: 16,
    fontWeight: "bold",
  },
  localizacao: {
    fontSize: 14,
    color: "gray",
    marginBottom: 5,
  },
  detalhes: {
    fontSize: 13,
  },
});

export default CircuitosScreen;
