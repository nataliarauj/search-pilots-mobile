import React from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

const CircuitosScreen = () => {
  
  const circuitosData = [
    {
      id: 1,
      nome: "Circuito de Interlagos",
      localizacao: "São Paulo, Brasil",
      latitude: -23.7034,
      longitude: -46.6992,
    },
    {
      id: 2,
      nome: "Circuito de Mônaco",
      localizacao: "Monte Carlo, Mônaco",
      latitude: 43.7347,
      longitude: 7.4206,
    },
    {
      id: 3,
      nome: "Circuito de Silverstone",
      localizacao: "Northamptonshire, Reino Unido",
      latitude: 52.0786,
      longitude: -1.0169,
    },
    {
      id: 4,
      nome: "Circuito de Monza",
      localizacao: "Monza, Itália",
      latitude: 45.6156,
      longitude: 9.2811,
    },
    {
      id: 5,
      nome: "Circuito de Spa-Francorchamps",
      localizacao: "Stavelot, Bélgica",
      latitude: 50.4372,
      longitude: 5.975,
    },
    {
      id: 6,
      nome: "Circuito de Suzuka",
      localizacao: "Suzuka, Japão",
      latitude: 34.8431,
      longitude: 136.541,
    },
    {
      id: 7,
  nome: "Circuito de Silverstone",
  localizacao: "Northamptonshire, Reino Unido",
  latitude: 52.0786,
  longitude: -1.0169,
    },
    {
      id: 8,
      nome: "Circuito de Montreal",
      localizacao: "Montreal, Canadá",
      latitude: 45.5088,
      longitude: -73.5542,
    },
    {
      id: 9,
      nome: "Circuito de Melbourne",
      localizacao: "Melbourne, Austrália",
      latitude: -37.8497,
      longitude: 144.968,
    },
    {
      id: 10,
      nome: "Circuito de Baku",
      localizacao: "Baku, Azerbaijão",
      latitude: 40.3725,
      longitude: 49.8533,
    },
    {
      id: 11,
      nome: "Circuito de Singapura",
      localizacao: "Singapura",
      latitude: 1.2915,
      longitude: 103.864,
    },
    {
      id: 12,
      nome: "Circuito de Yas Marina",
      localizacao: "Abu Dhabi, Emirados Árabes Unidos",
      latitude: 24.4672,
      longitude: 54.6031,
    },
    {
      id: 13,
      nome: "Circuito de Austin",
      localizacao: "Austin, Texas, EUA",
      latitude: 30.1338,
      longitude: -97.6411,
    },
    {
      id: 14,
      nome: "Circuito de Nürburgring",
      localizacao: "Nürburg, Alemanha",
      latitude: 50.3356,
      longitude: 6.9475,
    },
    {
      id: 15,
      nome: "Circuito de Hockenheim",
      localizacao: "Hockenheim, Alemanha",
      latitude: 49.3278,
      longitude: 8.5656,
    },
    {
      id: 16,
      nome: "Circuito de Shanghai",
      localizacao: "Shanghai, China",
      latitude: 31.3389,
      longitude: 121.22,
    },
    {
      id: 17,
      nome: "Circuito de Bahrain",
      localizacao: "Sakhir, Bahrain",
      latitude: 26.0325,
      longitude: 50.5106,
    },
    {
      id: 18,
      nome: "Circuito de Zandvoort",
      localizacao: "Zandvoort, Holanda",
      latitude: 52.3886,
      longitude: 4.5408,
    },
    {
      id: 19,
      nome: "Circuito de Hungaroring",
      localizacao: "Budapeste, Hungria",
      latitude: 47.5839,
      longitude: 19.2486,
    },
    {
      id: 20,
      nome: "Circuito de Jeddah",
      localizacao: "Jeddah, Arábia Saudita",
      latitude: 21.6319,
      longitude: 39.1044,
    },
    {
      id: 21,
      nome: "Circuito de Imola",
      localizacao: "Imola, Itália",
      latitude: 44.3439,
      longitude: 11.7167,
    },
    {
      id: 22,
      nome: "Circuito de Paul Ricard",
      localizacao: "Le Castellet, França",
      latitude: 43.2506,
      longitude: 5.7917,
    },
    {
      id: 23,
      nome: "Circuito de Sochi",
      localizacao: "Sochi, Rússia",
      latitude: 43.4056,
      longitude: 39.9542,
    },


  ];

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -14.2350, 
          longitude: -51.9253,
          latitudeDelta: 50, 
          longitudeDelta: 50,
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
            description={circuito.localizacao}
          />
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
});

export default CircuitosScreen;