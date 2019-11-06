import React from "react";
import { StyleSheet, View, Button } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: "Profile"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Button title="Home" onPress={() => navigate("Home")} />
      </View>
    );
  }
}

class HomeScreen extends React.Component {
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
              alert("Starting combat!");
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
  }
});

const MainNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Profile: { screen: ProfileScreen }
  },
  { initialRouteName: "Home" }
);

const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
