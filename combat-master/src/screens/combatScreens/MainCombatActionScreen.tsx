import React, { useState } from "react";
import { MainActionButton } from "../../components/MainActionButton";
import { View, Text } from "react-native";
import { NavigationInjectedProps } from "react-navigation";

interface MainCombatActionScreenProps extends NavigationInjectedProps {}

export const MainCombatActionScreen: React.FC<MainCombatActionScreenProps> = (props) => {
  const { navigation } = props;
  const [selectedMovement, updateSelectedMovement] = useState(0);
  const [selectedAction, updateSelectedAction] = useState("");

  const updateMovement = (valueToUpdate: number) => {
    updateSelectedMovement(valueToUpdate);
  };

  return (
    <View>
      <MainActionButton
        buttonText="Move"
        destination="Move"
        navigation={navigation}
        propsForPassing={{ selectedValue: selectedMovement, updateValue: updateMovement }}
      />
      <Text>{selectedMovement}</Text>
      <MainActionButton buttonText="Action" destination="Action" navigation={navigation} />
      <Text>{selectedAction}</Text>
      <MainActionButton buttonText="Bonus Action" destination="BonusAction" navigation={navigation} />
    </View>
  );
};

MainCombatActionScreen.navigationOptions = { title: "Combat" };
