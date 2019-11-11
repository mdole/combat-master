import React from "react";
import { StyleSheet, View, Button } from "react-native";
import { NavigationInjectedProps } from "react-navigation";

interface HomeScreenProps extends NavigationInjectedProps {}

export class HomeScreen extends React.Component<HomeScreenProps> {
  static navigationOptions = {
    title: "Welcome"
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            title="Start Combat"
            color="#434343"
            onPress={() => {
              this.props.navigation.navigate("MainCombatAction");
            }}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Character settings"
            onPress={() =>
              this.props.navigation.navigate("Profile", { name: "Xavier" })
            }
          />
        </View>
      </View>
    );
  }
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
  },
  buttonRow: {
    margin: 20
  }
});
