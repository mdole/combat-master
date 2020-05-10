import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ScrollView, Text, Button, View } from "react-native";
import { NavigationInjectedProps } from "react-navigation";
import { Toggle } from "../../components/Toggle";
import { actions } from "../../components/actions";
import { updateSelectedAction } from "../../store/actions";

interface ActionScreenProps extends NavigationInjectedProps {}

export const ActionScreen: React.FC<ActionScreenProps> = (props) => {
  const { navigate } = props.navigation;
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [locallySelectedAction, changeLocallySelectedAction] = useState(state.selectedAction);

  return (
    <>
      <ScrollView>
        {actions.map((action, index) => {
          const isCurrentlySelectedAction = action.label === locallySelectedAction;
          return (
            <Toggle
              label={action.label}
              bodyText={action.bodyText}
              key={index}
              isCurrentlySelectedAction={isCurrentlySelectedAction}
              updateParentState={changeLocallySelectedAction}
            />
          );
        })}
        <View>
          <Text>{locallySelectedAction}</Text>
        </View>
      </ScrollView>
      <Button
        title="Confirm action"
        onPress={() => {
          dispatch(updateSelectedAction(locallySelectedAction));
          navigate("MainCombatAction");
        }}
      />
    </>
  );
};

ActionScreen.navigationOptions = { title: "Action" };
