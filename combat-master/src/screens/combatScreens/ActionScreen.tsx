import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ScrollView, Text, Button, View } from "react-native";
import { NavigationInjectedProps } from "react-navigation";
import { ActionSelector } from "../../components/ActionSelector";
import { actions } from "../../components/actions";
import { updateSelectedAction } from "../../store/actions";
import { parchment } from "../../styles/colors";
import styled from "styled-components/native";
import { FinishedButton } from "../../components/FinishedButton";

interface ActionScreenProps extends NavigationInjectedProps {}

export const ActionScreen: React.FC<ActionScreenProps> = (props) => {
  const { navigate } = props.navigation;
  const dispatch = useDispatch();
  const state = useSelector((state) => state.actionReducer);
  const [locallySelectedAction, setLocallySelectedAction] = useState(state.selectedAction);

  const StyledView = styled.View`
    background-color: ${parchment};
    width: 90%;
    height: 90%;
    margin: 5%;
    align-items: center;
    justify-content: space-between;
  `;

  const SelectionContainer = styled.View`
    width: 90%;
    margin-top: 20px;
  `;

  return (
    <StyledView>
      <SelectionContainer>
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
      </SelectionContainer>
      <FinishedButton
        onPress={() => {
          dispatch(updateSelectedAction(locallySelectedAction));
          navigate("MainCombatAction");
        }}
      />
    </StyledView>
  );
};

ActionScreen.navigationOptions = { title: "Action" };
