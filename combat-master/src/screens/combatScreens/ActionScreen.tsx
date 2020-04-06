import React from "react";
import { ScrollView, Text, Button, View } from "react-native";
import { NavigationInjectedProps } from "react-navigation";
import { Toggle } from "../../components/Toggle";
import { actions } from "../../components/actions";

interface ActionScreenProps extends NavigationInjectedProps {}

export const ActionScreen: React.FC<ActionScreenProps> = (props) => {
  const { navigate } = props.navigation;

  return (
    <>
      <ScrollView>
        {actions.map((action, index) => {
          return <Toggle label={action.name} bodyText={action.fullText} key={index} />;
        })}
      </ScrollView>
      {/* displayed information scrollview */}
      {/* This will live on the bottom */}
      <Button title="Confirm action" onPress={() => navigate("MainCombatAction")} />
    </>
  );
};

ActionScreen.navigationOptions = { title: "Action" };
