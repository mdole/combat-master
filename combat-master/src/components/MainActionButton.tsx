import React from "react";
import { View, TouchableHighlight, Text, StyleSheet } from "react-native";
import { NavigationInjectedProps } from "react-navigation";

interface MainActionButtonProps extends NavigationInjectedProps {
  buttonText: string;
  destination: string;
  propsForPassing: { selectedValue: string | number; updateValue: { (valueToUpdate: string | number): void } };
}

export const MainActionButton: React.FC<MainActionButtonProps> = (props) => {
  const { navigate } = props.navigation;
  return (
    <View style={styles.buttonContainer}>
      <TouchableHighlight onPress={() => navigate(props.destination, props.propsForPassing)}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{props.buttonText}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#000",
    alignItems: "center",
    margin: 20,
  },
  button: {
    backgroundColor: "#000",
    width: 260,
    alignItems: "center",
  },
  buttonText: {
    textAlign: "center",
    padding: 20,
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
