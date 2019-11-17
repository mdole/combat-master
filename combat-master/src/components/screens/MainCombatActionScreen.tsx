import React from "react";
import { MainActionButton } from "../MainActionButton";
import { View } from "react-native";
import { NavigationInjectedProps } from "react-navigation";

interface MainCombatActionScreenProps extends NavigationInjectedProps {}

export const MainCombatActionScreen: React.FC<MainCombatActionScreenProps> = props => {
  const { navigation } = props;
  return (
    <View>
      <MainActionButton
        buttonText="Move"
        destination="Move"
        navigation={navigation}
      />
      <MainActionButton
        buttonText="Action"
        destination="Action"
        navigation={navigation}
      />
      <MainActionButton
        buttonText="Bonus Action"
        destination="BonusAction"
        navigation={navigation}
      />
    </View>
  );
};

MainCombatActionScreen.navigationOptions = { title: "Combat" };
