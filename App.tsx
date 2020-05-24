import React from "react";
import { Provider } from "react-redux";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Screens, initialRouteName } from "./combat-master/src/navigation";
import { AppLoading } from "expo";
import { store } from "./combat-master/src/store/configureStore";
import { useFonts, Cinzel_400Regular, Cinzel_700Bold } from "@expo-google-fonts/cinzel";
import { Lato_300Light } from "@expo-google-fonts/lato";

const MainNavigator = createStackNavigator(Screens, {
  initialRouteName: initialRouteName,
});

const AppContainer = createAppContainer(MainNavigator);

const App: React.FC = () => {
  let [fontsLoaded] = useFonts({
    Cinzel_400Regular,
    Cinzel_700Bold,
    Lato_300Light,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
};

export default App;
