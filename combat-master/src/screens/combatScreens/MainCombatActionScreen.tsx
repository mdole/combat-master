import React from "react";
import { MainActionButton } from "../../components/MainActionButton";
import { View } from "react-native";
import { NavigationInjectedProps } from "react-navigation";
import { useSelector } from "react-redux";

interface MainCombatActionScreenProps extends NavigationInjectedProps {}

export const MainCombatActionScreen: React.FC<MainCombatActionScreenProps> = (props) => {
  const state = useSelector((state) => state);
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

MainCombatActionScreen.navigationOptions = { title: "Combat" };
