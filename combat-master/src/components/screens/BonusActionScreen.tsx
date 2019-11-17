import React from "react";
import { View, Button } from "react-native";
import { NavigationInjectedProps } from "react-navigation";

interface BonusActionScreenProps extends NavigationInjectedProps {}

export const BonusActionScreen: React.FC<BonusActionScreenProps> = props => {
  const { navigate } = props.navigation;
  return (
    <View>
      <Button
        title="Back to main screen"
        onPress={() => {
          navigate("MainCombatAction");
        }}
      />
    </View>
  );
};

BonusActionScreen.navigationOptions = { title: "Bonus Action" };
