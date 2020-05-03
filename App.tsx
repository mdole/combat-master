import React from "react";
import { Provider } from "react-redux";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Screens, initialRouteName } from "./combat-master/src/navigation";
import { store } from "./combat-master/src/store/configureStore";

const MainNavigator = createStackNavigator(Screens, {
  initialRouteName: initialRouteName,
});

const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
