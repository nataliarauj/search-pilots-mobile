import { StyleSheet } from "react-native";

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#000000",
    marginTop: 250,
  },
  searchContainer: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 20,
    alignItems: "center",
  },
  input: {
    borderColor: "#000000",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#ffffff",
    marginBottom: 20,
    color: "#000000",
  },
  button: {
    marginLeft: 10,
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ff0000",
  },
  buttonText: {
    color: "#ff0000",
    fontWeight: "bold",
  },
});

export default homeStyles;
