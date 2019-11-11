import React from "react";
import MainActionButton from "../MainActionButton";
import { View } from "react-native";
import { NavigationInjectedProps } from "react-navigation";

interface MainCombatActionScreenProps extends NavigationInjectedProps {}

export class MainCombatActionScreen extends React.Component<
  MainCombatActionScreenProps
> {
  static navigationOptions = {
    title: "Combat"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <MainActionButton buttonText="Move" />
        <MainActionButton buttonText="Action" />
        <MainActionButton buttonText="Bonus Action" />
      </View>
    );
  }
}
