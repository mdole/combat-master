import React, { useState } from "react";
import { View, Text } from "react-native";
import { StyledInput } from "../components/styledComponents/StyledInput";
import styled from "styled-components/native";
import { lightBlue } from "../styles/colors";
import { useSelector, useDispatch } from "react-redux";
import { CinzelRegular } from "../components/styledComponents/FontComponents";
import { FinishedButton } from "../components/FinishedButton";
import { updateCharacterBonusActions } from "../store/actions/characterActions";
import { CharacterValues } from "./ProfileScreen";

interface InputBonusActionsScreenProps {
  tktk: string;
}

export interface BonusAction {
  title: string;
  description: string;
}

const AddButton = styled.TouchableOpacity`
  background: ${lightBlue};
  border: 1px solid #000000;
  border-radius: 2px;
  width: 170px;
  height: 50px;
  align-items: center;
  justify-content: center;
`;

export const InputBonusActionsScreen: React.FC<InputBonusActionsScreenProps> = (props) => {
  const state = useSelector((state) => state.characterReducer);
  const dispatch = useDispatch();
  const character: CharacterValues = state;

  const [actionInput, setActionInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [listOfActions, setListOfActions] = useState<Array<BonusAction>>(character.bonusActions);

  return (
    <View>
      {listOfActions.map((action, index) => {
        return (
          <View key={index}>
            <Text>Action: {action.title}</Text>
            <Text>Description: {action.description}</Text>
          </View>
        );
      })}
      <StyledInput
        placeholder={"Enter a bonus action"}
        onChangeText={(text) => setActionInput(text)}
        value={actionInput}
      />
      <StyledInput
        placeholder={"Enter a description"}
        onChangeText={(text) => setDescriptionInput(text)}
        value={descriptionInput}
      />
      <AddButton
        onPress={() => {
          setListOfActions([...listOfActions, { title: actionInput, description: descriptionInput }]);
          setActionInput("");
          setDescriptionInput("");
        }}
      >
        <CinzelRegular size="20">Add Action</CinzelRegular>
      </AddButton>
      <FinishedButton onPress={() => dispatch(updateCharacterBonusActions(listOfActions))} />
    </View>
  );
};
