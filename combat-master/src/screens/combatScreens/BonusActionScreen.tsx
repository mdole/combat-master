import React, { useEffect } from "react";
import { View } from "react-native";
import { updateBonusAction } from "../../store/actions";
import { useSelector, useDispatch } from "react-redux";
import { CharacterValues } from "..";
import { FinishedButton } from "../../components/FinishedButton";
import { AddBonusActionButton } from "../../components/AddBonusActionButton";
import { CinzelRegular, LatoLight } from "../../components/styledComponents/FontComponents";
import { ActionSelector } from "../../components/ActionSelector";
import { ParchmentBackground } from "../../components/styledComponents/ParchmentBackground";
import { ActionContainer } from "../../components/styledComponents/ActionContainer";
import { ActionDescription } from "../../components/styledComponents/ActionDescription";

interface BonusActionScreenProps {}

export const BonusActionScreen: React.FC<BonusActionScreenProps> = (props) => {
  const { navigate } = props.navigation;
  const state = useSelector((state) => state);
  const actions = state.actionReducer;
  const character: CharacterValues = state.characterReducer;
  const noSelectedActionLabel = "No Bonus Action";

  const [localBonusAction, updateLocalBonusAction] = React.useState(actions.selectedBonusAction);
  const dispatch = useDispatch();

  useEffect(() => {
    updateLocalBonusAction(actions.selectedBonusAction);
  }, [actions.selectedBonusAction]);

  return (
    <ParchmentBackground style={{ flex: 1 }}>
      <ActionContainer>
        <LatoLight size="18" style={{ marginBottom: 20 }}>
          {bonusActionDescription}
        </LatoLight>
        <View style={{ flex: 3, justifyContent: "space-between" }}>
          {character.bonusActions &&
            character.bonusActions.map((action, index) => {
              const isCurrentlySelectedAction = action.title === localBonusAction;
              return (
                <ActionSelector
                  bodyText={action.description}
                  isCurrentlySelectedAction={isCurrentlySelectedAction}
                  updateParentState={updateLocalBonusAction}
                  label={action.title}
                  key={index}
                />
              );
            })}
          {character.bonusActions.length !== 0 && (
            <ActionSelector
              label={noSelectedActionLabel}
              isCurrentlySelectedAction={noSelectedActionLabel === localBonusAction}
              updateParentState={updateLocalBonusAction}
            />
          )}
          {character.bonusActions.length !== 0 && (
            <>
              <LatoLight size="14" style={{ marginVertical: 10, alignSelf: "flex-start" }}>
                Selected action description
              </LatoLight>
              <ActionDescription>
                <LatoLight size="14px">
                  {
                    character.bonusActions.filter((bonusAction) => bonusAction.title === localBonusAction)[0]
                      ?.description
                  }
                </LatoLight>
              </ActionDescription>
            </>
          )}
          <AddBonusActionButton
            onPress={() => {
              navigate("InputBonusActionsScreen");
            }}
            style={{ alignSelf: "center", marginVertical: 20, width: "100%" }}
          >
            <CinzelRegular size="20">Enter a new bonus action</CinzelRegular>
          </AddBonusActionButton>
          <FinishedButton
            onPress={() => {
              dispatch(updateBonusAction(localBonusAction));
              navigate("MainCombatAction");
            }}
          />
        </View>
      </ActionContainer>
    </ParchmentBackground>
  );
};

const bonusActionDescription = `Various class features, spells, and other abilities let you take an additional action on your turn called a bonus action. The Cunning Action feature, for example, allows a rogue to take a bonus action. You can take a bonus action only when a special ability, spell, or other feature of the game states that you can do something as a bonus action. You otherwise don't have a bonus action to take.

You can take only one bonus action on your turn, so you must choose which bonus action to use when you have more than one available.

You choose when to take a bonus action during your turn, unless the bonus action's timing is specified, and anything that deprives you of your ability to take actions also prevents you from taking a bonus action.`;
