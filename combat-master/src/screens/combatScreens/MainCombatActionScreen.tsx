import React from "react";
import { MainActionButton } from "../../components/MainActionButton";
import { View } from "react-native";
import { useSelector } from "react-redux";

interface MainCombatActionScreenProps {}

export const MainCombatActionScreen: React.FC<MainCombatActionScreenProps> = (props) => {
  const state = useSelector((state) => state.actionReducer);
  const { navigation } = props;
  return (
    <View style={{ flex: 1 }}>
      <MainActionButton
        buttonText="Move"
        destination="Move"
        navigation={navigation}
        secondaryText={state.selectedMovement}
      />
      <MainActionButton
        buttonText="Action"
        destination="Action"
        navigation={navigation}
        secondaryText={state.selectedAction}
      />
      <MainActionButton
        buttonText="Bonus Action"
        destination="BonusAction"
        navigation={navigation}
        secondaryText={state.selectedBonusAction}
      />
    </View>
  );
};
