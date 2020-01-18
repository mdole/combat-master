import React from "react";
import { ScrollView, Text, Button, View } from "react-native";
import { NavigationInjectedProps } from "react-navigation";

interface ActionScreenProps extends NavigationInjectedProps {}

export const ActionScreen: React.FC<ActionScreenProps> = props => {
  const { navigate } = props.navigation;
  return (
    <ScrollView>
      <Button title="Attack" onPress={() => navigate("AttackAction")} />
      <Text>Attack</Text>
      <Text>Cast spell</Text>
      <Text>Dash</Text>
      <Text>Disengage</Text>
      <Text>Dodge</Text>
      <Text>Help</Text>
      <Text>Hide</Text>
      <Text>Ready</Text>
      <Text>Search</Text>
      <Text>Use object</Text>
      <Button
        title="Back to main screen"
        onPress={() => navigate("MainCombatAction")}
      />
    </ScrollView>
  );
};

ActionScreen.navigationOptions = { title: "Action" };
