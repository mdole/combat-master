import React from "react";
import { StyleSheet, View, Button } from "react-native";

export default function App() {
  const loadCombat = () => {
    return null;
  };
  const loadSettings = () => {
    return null;
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Start Combat" onPress={loadCombat()} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Character settings" onPress={loadSettings()} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonContainer: {
    margin: 20
  },
  mainButtonContainer: {
    flex: 1
  }
});
