import React, { useState } from "react";
import { ScrollView, Text, Button, View } from "react-native";
import { NavigationInjectedProps } from "react-navigation";
import { Toggle } from "../../components/Toggle";

interface ActionScreenProps extends NavigationInjectedProps {}

export const ActionScreen: React.FC<ActionScreenProps> = (props) => {
  const { navigate } = props.navigation;
  return (
    <ScrollView>
      <Toggle />
      <Text>Dash</Text>
      <Text>Disengage</Text>
      <Text>Dodge</Text>
      <Text>Help</Text>
      <Text>Hide</Text>
      <Text>Ready</Text>
      <Text>Search</Text>
      <Text>Use object</Text>
      <Button title="Back to main screen" onPress={() => navigate("MainCombatAction")} />
    </ScrollView>
  );
};

ActionScreen.navigationOptions = { title: "Action" };
