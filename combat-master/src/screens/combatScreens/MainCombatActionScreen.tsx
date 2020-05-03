import React, { useState } from "react";
import { MainActionButton } from "../../components/MainActionButton";
import { View, Text } from "react-native";
import { NavigationInjectedProps } from "react-navigation";
import { useSelector } from "react-redux";

interface MainCombatActionScreenProps extends NavigationInjectedProps {}

export const MainCombatActionScreen: React.FC<MainCombatActionScreenProps> = (props) => {
  const state = useSelector((state) => state);
  const { navigation } = props;
  const [selectedMovement, updateSelectedMovement] = useState(0);
  const [selectedAction, updateSelectedAction] = useState("");
  const [selectedBonusAction, updateSelectedBonusAction] = useState("");

  const updateMovement = (valueToUpdate: number) => {
    updateSelectedMovement(valueToUpdate);
  };

  const updateAction = (valueToUpdate: string) => {
    updateSelectedAction(valueToUpdate);
  };

  const updateBonusAction = (valueToUpdate: string) => {
    updateSelectedBonusAction(valueToUpdate);
  };

  return (
    <View>
      <MainActionButton
        buttonText="Move"
        destination="Move"
        navigation={navigation}
        propsForPassing={{ selectedValue: selectedMovement, updateValue: updateMovement }}
      />
      <Text>{state.selectedMovement}</Text>
      <MainActionButton
        buttonText="Action"
        destination="Action"
        navigation={navigation}
        propsForPassing={{ selectedValue: selectedAction, updateValue: updateAction }}
      />
      <Text>{state.selectedAction}</Text>
      <MainActionButton
        buttonText="Bonus Action"
        destination="BonusAction"
        navigation={navigation}
        propsForPassing={{ selectedValue: selectedBonusAction, updateValue: updateBonusAction }}
      />
    </View>
  );
};

MainCombatActionScreen.navigationOptions = { title: "Combat" };
