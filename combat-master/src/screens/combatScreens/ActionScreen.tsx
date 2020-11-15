import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View } from "react-native";
import { ActionSelector } from "../../components/ActionSelector";
import { actions } from "../../components/actions";
import { updateSelectedAction } from "../../store/actions";
import styled from "styled-components/native";
import { FinishedButton } from "../../components/FinishedButton";
import { LatoLight } from "../../components/styledComponents/FontComponents";
import { ParchmentBackground } from "../../components/styledComponents/ParchmentBackground";
import { ActionDescription } from "../../components/styledComponents/ActionDescription";
import { ActionContainer } from "../../components/styledComponents/ActionContainer";

interface ActionScreenProps {}

export const ActionScreen: React.FC<ActionScreenProps> = (props) => {
  const { navigate } = props.navigation;
  const dispatch = useDispatch();
  const state = useSelector((state) => state.actionReducer);
  const [locallySelectedAction, setLocallySelectedAction] = useState(state.selectedAction);

  return (
    <ParchmentBackground style={{ flex: 1 }}>
      <ActionContainer>
        <View style={{ flex: 3, justifyContent: "space-between" }}>
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
        </View>
        <LatoLight size="14" style={{ marginVertical: 10, alignSelf: "flex-start" }}>
          Selected action description
        </LatoLight>
        <ActionDescription>
          <LatoLight size="14px">
            {actions.filter((action) => action.label === locallySelectedAction)[0].bodyText}
          </LatoLight>
        </ActionDescription>
        <View style={{ marginTop: 20, marginBottom: 30, flex: 1 }}>
          <FinishedButton
            onPress={() => {
              dispatch(updateSelectedAction(locallySelectedAction));
              navigate("MainCombatAction");
            }}
          />
        </View>
      </ActionContainer>
    </ParchmentBackground>
  );
};
