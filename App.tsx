import React from "react";
import { Provider } from "react-redux";
import { ScreenStack } from "./combat-master/src/navigation";
import { AppLoading } from "expo";
import { store } from "./combat-master/src/store/configureStore";
import { useFonts, Cinzel_400Regular, Cinzel_700Bold } from "@expo-google-fonts/cinzel";
import { Lato_300Light } from "@expo-google-fonts/lato";
import { NavigationContainer } from "@react-navigation/native";

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
        <NavigationContainer>
          <ScreenStack />
        </NavigationContainer>
      </Provider>
    );
  }
};

export default App;
