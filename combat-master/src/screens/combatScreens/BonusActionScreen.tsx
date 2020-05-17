import React from "react";
import { View, Button, Text, TextInput } from "react-native";
import { NavigationInjectedProps } from "react-navigation";
import styled from "styled-components";
import { updateBonusAction } from "../../store/actions";
import { useSelector, useDispatch } from "react-redux";

interface BonusActionScreenProps extends NavigationInjectedProps {}

const StyledTextInput = styled(TextInput)`
  border: 1px black;
`;
export const BonusActionScreen: React.FC<BonusActionScreenProps> = (props) => {
  const { navigate } = props.navigation;
  const state = useSelector((state) => state);

  const [localBonusAction, updateLocalBonusAction] = React.useState(state.selectedBonusAction);
  const dispatch = useDispatch();

  return (
    <View>
      <Text>{bonusActionDescription}</Text>

      <StyledTextInput
        placeholder="Input a bonus action you plan to take"
        clearTextOnFocus={true}
        onChangeText={(text) => updateLocalBonusAction(text)}
      >
        {state.selectedBonusAction}
      </StyledTextInput>
      <Button
        title="Confirm bonus action"
        onPress={() => {
          dispatch(updateBonusAction(localBonusAction));
          navigate("MainCombatAction");
        }}
      />
    </View>
  );
};

const bonusActionDescription = `Various class features, spells, and other abilities let you take an additional action on your turn called a bonus action. The Cunning Action feature, for example, allows a rogue to take a bonus action. You can take a bonus action only when a special ability, spell, or other feature of the game states that you can do something as a bonus action. You otherwise don't have a bonus action to take.

You can take only one bonus action on your turn, so you must choose which bonus action to use when you have more than one available.

You choose when to take a bonus action during your turn, unless the bonus action's timing is specified, and anything that deprives you of your ability to take actions also prevents you from taking a bonus action.`;

BonusActionScreen.navigationOptions = { title: "Bonus Action" };
