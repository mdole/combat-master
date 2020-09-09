import React from "react";
import {
  ActionScreen,
  BonusActionScreen,
  HomeScreen,
  InputBonusActionsScreen,
  MainCombatActionScreen,
  MoveScreen,
  ProfileScreen,
} from "../screens";
import { createStackNavigator } from "@react-navigation/stack";
import { parchment } from "../styles/colors";

export const ScreenStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTintColor: "black",
        headerStyle: { backgroundColor: parchment },
        headerTitleStyle: { fontFamily: "Lato_300Light" },
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen name="Action" component={ActionScreen} options={{ title: "Action" }} />
      <Stack.Screen name="BonusAction" component={BonusActionScreen} options={{ title: "Bonus action" }} />
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen
        name="InputBonusActionsScreen"
        component={InputBonusActionsScreen}
        options={{ title: "Input bonus actions" }}
      />
      <Stack.Screen name="MainCombatAction" component={MainCombatActionScreen} options={{ title: "Combat" }} />
      <Stack.Screen name="Move" component={MoveScreen} options={{ title: "Move" }} />
      <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: "Profile" }} />
    </Stack.Navigator>
  );
};
