import React from "react";
import { StyleSheet, View, Text, Linking } from "react-native";
import MapView, { Marker } from "react-native-maps";

const MapaScreen = () => {
  // Dados dos circuitos de Fórmula 1 
  const circuitos = [
    {
      id: 1,
      nome: "Circuito de Mônaco",
      localizacao: { latitude: 43.7347, longitude: 7.4206 },
      descricao: "Circuito urbano nas ruas de Monte Carlo.",
      videoUrl: "https://www.youtube.com/watch?v=exemplo1",
    },
    {
      id: 2,
      nome: "Circuito de Silverstone",
      localizacao: { latitude: 52.0786, longitude: -1.0169 },
      descricao: "Conhecido como o berço da Fórmula 1.",
      videoUrl: "https://www.youtube.com/watch?v=exemplo2",
    },
    {
      id: 3,
      nome: "Circuito de Interlagos",
      localizacao: { latitude: -23.7036, longitude: -46.6997 },
      descricao: "Localizado em São Paulo, Brasil.",
      videoUrl: "https://www.youtube.com/watch?v=exemplo3",
    },
  ];

  const abrirVideo = (url) => {
    Linking.openURL(url).catch((err) =>
      console.error("Erro ao abrir o vídeo:", err)
    );
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 0,
          longitude: 0,
          latitudeDelta: 100,
          longitudeDelta: 100,
        }}
      >
        {circuitos.map((circuito) => (
          <Marker
            key={circuito.id}
            coordinate={circuito.localizacao}
            title={circuito.nome}
            description={circuito.descricao}
            onCalloutPress={() => abrirVideo(circuito.videoUrl)}
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

export default MapaScreen;