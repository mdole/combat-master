import React from "react";
import { MainActionButton } from "../../components/MainActionButton";
import { View, Text } from "react-native";
import { NavigationInjectedProps } from "react-navigation";
import { useSelector } from "react-redux";

interface MainCombatActionScreenProps extends NavigationInjectedProps {}

export const MainCombatActionScreen: React.FC<MainCombatActionScreenProps> = (props) => {
  const state = useSelector((state) => state);
  const { navigation } = props;

  return (
    <View style={{ flex: 1 }}>
      <MainActionButton buttonText="Move" destination="Move" navigation={navigation} />
      {/* <Text>{state.selectedMovement}</Text> */}
      <MainActionButton buttonText="Action" destination="Action" navigation={navigation} />
      {/* <Text>{state.selectedAction}</Text> */}
      <MainActionButton buttonText="Bonus Action" destination="BonusAction" navigation={navigation} />
      {/* <Text>{state.selectedBonusAction}</Text> */}
    </View>
  );
};

MainCombatActionScreen.navigationOptions = { title: "Combat" };
