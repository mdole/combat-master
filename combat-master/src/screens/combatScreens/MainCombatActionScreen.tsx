import React from "react";
import { MainActionButton } from "../../components/MainActionButton";
import { View } from "react-native";
import { useSelector } from "react-redux";
import { Spacer } from "../../components/styledComponents/Spacer";

interface MainCombatActionScreenProps {}

export const MainCombatActionScreen: React.FC<MainCombatActionScreenProps> = (props) => {
  const state = useSelector((state) => state.actionReducer);
  const { navigation } = props;
  return (
    <View style={{ flex: 1, margin: 20 }}>
      <MainActionButton
        buttonText="Move"
        destination="Move"
        navigation={navigation}
        secondaryText={state.selectedMovement}
      />
      <Spacer height="20px" />
      <MainActionButton
        buttonText="Action"
        destination="Action"
        navigation={navigation}
        secondaryText={state.selectedAction}
      />
      <Spacer height="20px" />
      <MainActionButton
        buttonText="Bonus Action"
        destination="BonusAction"
        navigation={navigation}
        secondaryText={state.selectedBonusAction}
      />
    </View>
  );
};
