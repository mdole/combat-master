import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Screens, initialRouteName } from "./combat-master/src/navigation";

const MainNavigator = createStackNavigator(Screens, {
  initialRouteName: initialRouteName
});

const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
