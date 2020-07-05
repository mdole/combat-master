import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ScrollView, Text, Button, View } from "react-native";
import { NavigationInjectedProps } from "react-navigation";
import { ActionSelector } from "../../components/ActionSelector";
import { actions } from "../../components/actions";
import { updateSelectedAction } from "../../store/actions";

interface ActionScreenProps extends NavigationInjectedProps {}

export const ActionScreen: React.FC<ActionScreenProps> = (props) => {
  const { navigate } = props.navigation;
  const dispatch = useDispatch();
  const state = useSelector((state) => state.actionReducer);
  const [locallySelectedAction, setLocallySelectedAction] = useState(state.selectedAction);

  return (
    <>
      <View>
        {actions.map((action, index) => {
          const isCurrentlySelectedAction = action.label === locallySelectedAction;
          return (
            <ActionSelector
              label={action.label}
              bodyText={action.bodyText}
              key={index}
              isCurrentlySelectedAction={isCurrentlySelectedAction}
              updateParentState={setLocallySelectedAction}
            />
          );
        })}
        <ScrollView>
          <Text>{actions.filter((action) => action.label === locallySelectedAction)[0].bodyText}</Text>
        </ScrollView>
      </View>
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
