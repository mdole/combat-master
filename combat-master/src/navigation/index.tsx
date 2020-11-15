import React from "react";
import { Image, View } from "react-native";
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
import Svg, { Path } from "react-native-svg";

export const ArrowIcon = () => {
  return (
    <Svg width="50px" height="50px" viewBox="0 0 512 640" style={{ marginTop: 10 }}>
      <Path d="M448 256l64 64h-48l-64-64 64-64h48.563zm.563-64H400l-48 48H127.438v-80l-128 96 128 96v-80H352l48 48h48l-64-64z" />
    </Svg>
  );
};

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
        headerBackImage: () => {
          return <ArrowIcon />;
        },
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
