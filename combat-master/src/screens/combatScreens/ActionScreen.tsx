import React, { useState } from "react";
import { ScrollView, Text, Button, View } from "react-native";
import { NavigationInjectedProps } from "react-navigation";
import { Toggle } from "../../components/Toggle";
import { actions } from "../../components/actions";

interface ActionScreenProps extends NavigationInjectedProps {}

export const ActionScreen: React.FC<ActionScreenProps> = (props) => {
  const { navigate } = props.navigation;
  const [selectedAction, updateSelectedAction] = useState("No action selected");

  return (
    <>
      <ScrollView>
        {actions.map((action, index) => {
          return (
            <Toggle
              label={action.label}
              bodyText={action.bodyText}
              key={index}
              value={selectedAction}
              updateValue={updateSelectedAction}
            />
          );
        })}
        <View>
          <Text>{selectedAction}</Text>
        </View>
      </ScrollView>
      {/* displayed information scrollview */}
      {/* This will live on the bottom */}
      <Button
        title="Confirm action"
        onPress={() => {
          props.navigation.state.params.updateValue(selectedAction);
          navigate("MainCombatAction");
        }}
      />
    </>
  );
};

ActionScreen.navigationOptions = { title: "Action" };
