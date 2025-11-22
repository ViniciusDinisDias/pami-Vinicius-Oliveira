import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador</Text>

      <Text style={styles.counter}>{count}</Text>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.btnMinus} onPress={() => setCount(count - 1)}>
          <Text style={styles.btnText}>Diminuir</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnPlus} onPress={() => setCount(count + 1)}>
          <Text style={styles.btnText}>Aumentar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "600",
    marginBottom: 20,
  },
  counter: {
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: 40,
    color: "#333",
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 20,
  },
  btnMinus: {
    backgroundColor: "#ff4b4b",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    elevation: 3,
  },
  btnPlus: {
    backgroundColor: "#3b82f6",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    elevation: 3,
  },
  btnText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
