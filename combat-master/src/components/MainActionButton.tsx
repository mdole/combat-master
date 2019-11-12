import React, { Component } from "react";
import { View, TouchableHighlight, Text, StyleSheet } from "react-native";
import { withNavigation, NavigationInjectedProps } from "react-navigation";

interface MainActionButtonProps extends NavigationInjectedProps {
  buttonText: string;
  destination: string;
}

class MainActionButton extends Component<MainActionButtonProps> {
  render() {
    return (
      <View style={styles.buttonContainer}>
        <TouchableHighlight
          onPress={() => this.props.navigation.navigate(this.props.destination)}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>{this.props.buttonText}</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

export default withNavigation(MainActionButton);

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#000",
    alignItems: "center",
    margin: 20
  },
  button: {
    backgroundColor: "#000",
    width: 260,
    alignItems: "center"
  },
  buttonText: {
    textAlign: "center",
    padding: 20,
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "serif"
  }
});
