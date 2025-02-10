import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const favoritosStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: width * 0.05, // 5% da largura da tela
  },
  title: {
    fontSize: width > 400 ? 28 : 24, // Tamanho maior para telas maiores
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  favoritoItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    marginBottom: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  button: {
    backgroundColor: "#dc3545",
    padding: 8,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  flatListContent: {
    paddingBottom: 20, // Espaço no final da lista
  },
  emptyText: {
    textAlign: "center",
    color: "#888",
    fontSize: 16,
    marginTop: 20,
  },
});

export default favoritosStyles;