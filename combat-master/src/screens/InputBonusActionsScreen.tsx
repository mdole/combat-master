import React, { useState } from "react";
import { View } from "react-native";
import { StyledInput } from "../components/styledComponents/StyledInput";
import styled from "styled-components/native";
import { lightBlue, darkRed } from "../styles/colors";
import { useSelector, useDispatch } from "react-redux";
import { CinzelRegular, CinzelBold, LatoLight } from "../components/styledComponents/FontComponents";
import { FinishedButton } from "../components/FinishedButton";
import { updateCharacter } from "../store/actions/characterActions";
import { CharacterValues, storeCharacter } from "./ProfileScreen";
import { NavigationInjectedProps } from "react-navigation";
import { ParchmentBackground } from "../components/styledComponents/ParchmentBackground";

export interface BonusAction {
  title: string;
  description?: string;
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

const BonusActionList = styled.ScrollView`
  border: solid 1px #000;
  margin-bottom: 20;
  width: 100%;
  padding: 10px;
  background-color: white;
`;

export const InputBonusActionsScreen: React.FC<NavigationInjectedProps> = (props) => {
  const dispatch = useDispatch();

  const [actionInput, setActionInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [characterToStore, setCharacterToStore] = useState<CharacterValues>(
    useSelector((state) => state.characterReducer)
  );

  return (
    <ParchmentBackground>
      <View style={{ width: "100%", height: "100%" }}>
        <View style={{ margin: 10, height: "100%" }}>
          <BonusActionList>
            {characterToStore.bonusActions.map((action, index) => {
              return (
                <View key={index} style={{ marginBottom: 15 }}>
                  <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <CinzelBold size="24">{action.title}</CinzelBold>
                    <CinzelBold
                      size="24"
                      color={darkRed}
                      onPress={() => {
                        const tempBonusActions = [...characterToStore.bonusActions];
                        tempBonusActions.splice(index, 1);
                        setCharacterToStore({
                          ...characterToStore,
                          bonusActions: [...tempBonusActions],
                        });
                      }}
                    >
                      X
                    </CinzelBold>
                  </View>
                  <LatoLight size="14" numberOfLines={2}>
                    {action.description}
                  </LatoLight>
                </View>
              );
            })}
          </BonusActionList>

          <LatoLight size="14" style={{ marginBottom: 10, alignSelf: "flex-start" }}>
            Enter a bonus action
          </LatoLight>
          <StyledInput
            placeholder={"Enter a bonus action"}
            onChangeText={(text) => setActionInput(text)}
            value={actionInput}
            style={{ width: "100%" }}
          />
          <LatoLight size="14" style={{ marginBottom: 10, alignSelf: "flex-start" }}>
            Describe your bonus action
          </LatoLight>
          <StyledInput
            placeholder={"Enter a description"}
            onChangeText={(text) => setDescriptionInput(text)}
            value={descriptionInput}
            style={{ width: "100%" }}
          />
          <AddButton
            onPress={() => {
              setCharacterToStore({
                ...characterToStore,
                bonusActions: [...characterToStore.bonusActions, { title: actionInput, description: descriptionInput }],
              });
              setActionInput("");
              setDescriptionInput("");
            }}
            style={{ alignSelf: "center", marginBottom: 20 }}
          >
            <CinzelRegular size="20">Add</CinzelRegular>
          </AddButton>
          <FinishedButton
            text="Save & return"
            onPress={() => {
              storeCharacter(characterToStore);
              dispatch(updateCharacter(characterToStore));
              props.navigation.goBack();
            }}
          />
        </View>
      </View>
    </ParchmentBackground>
  );
};
