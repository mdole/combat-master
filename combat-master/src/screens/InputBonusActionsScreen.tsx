import React, { useState } from "react";
import { View, Alert } from "react-native";
import { StyledInput } from "../components/styledComponents/StyledInput";
import styled from "styled-components/native";
import { lightBlue, darkRed } from "../styles/colors";
import { useSelector, useDispatch } from "react-redux";
import { CinzelRegular, CinzelBold, LatoLight } from "../components/styledComponents/FontComponents";
import { FinishedButton } from "../components/FinishedButton";
import { updateCharacter } from "../store/actions/characterActions";
import { updateBonusAction } from "../store/actions/combatTurn";
import { CharacterValues, storeCharacter } from "./ProfileScreen";
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
  border-radius: 2px;
`;

export const InputBonusActionsScreen: React.FC = (props) => {
  const { navigation } = props;
  const dispatch = useDispatch();

  const originalCharacter: CharacterValues = useSelector((state) => state.characterReducer);
  const [actionInput, setActionInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [characterToStore, setCharacterToStore] = useState<CharacterValues>(originalCharacter);
  const selectedBonusAction = useSelector((state) => state.actionReducer.selectedBonusAction);

  const hasUnsavedChanges = characterToStore.bonusActions !== originalCharacter.bonusActions;

  React.useEffect(
    () =>
      navigation.addListener("beforeRemove", (e) => {
        // If we don't have unsaved changes, then we don't need to do anything
        // We only want to trigger this alert when using the header back arrow,
        // which has type POP, while the save & return uses GO_BACK
        if (!hasUnsavedChanges || e.data.action.type === "GO_BACK") {
          return;
        }

        // Prevent default behavior of leaving the screen
        e.preventDefault();

        // Prompt the user before leaving the screen
        Alert.alert(
          "Discard changes?",
          "You have unsaved changes. Are you sure to discard them and leave the screen?",
          [
            { text: "Don't leave", style: "cancel", onPress: () => {} },
            {
              text: "Discard",
              style: "destructive",
              // If the user confirmed, then we dispatch the action we blocked earlier
              // This will continue the action that had triggered the removal of the screen
              onPress: () => navigation.dispatch(e.data.action),
            },
          ]
        );
      }),
    [navigation, hasUnsavedChanges]
  );

  return (
    <ParchmentBackground>
      <View style={{ width: "100%", height: "100%" }}>
        <View style={{ margin: 10, height: "100%" }}>
          <LatoLight size="14" style={{ marginBottom: 10, alignSelf: "flex-start" }}>
            Saved bonus actions
          </LatoLight>
          <BonusActionList>
            {characterToStore.bonusActions &&
              characterToStore.bonusActions.map((action, index) => {
                return (
                  <View key={index} style={{ marginBottom: 15 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                      <CinzelBold size="24">{action.title}</CinzelBold>
                      <CinzelBold
                        size="24"
                        color={darkRed}
                        onPress={() => {
                          const tempBonusActions = [...characterToStore.bonusActions];
                          const deletedAction = tempBonusActions.splice(index, 1);
                          setCharacterToStore({
                            ...characterToStore,
                            bonusActions: [...tempBonusActions],
                          });
                          if (deletedAction[0].title === selectedBonusAction) {
                            dispatch(updateBonusAction(""));
                          }
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
              if (!!actionInput) {
                setCharacterToStore({
                  ...characterToStore,
                  bonusActions: [
                    ...characterToStore.bonusActions,
                    { title: actionInput, description: descriptionInput },
                  ],
                });
                setActionInput("");
                setDescriptionInput("");
              } else {
                Alert.alert("", "Please enter an action name");
              }
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
              navigation.goBack();
            }}
          />
        </View>
      </View>
    </ParchmentBackground>
  );
};
