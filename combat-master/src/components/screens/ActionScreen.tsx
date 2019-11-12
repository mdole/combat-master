import React from "react";
import { ScrollView, Text } from "react-native";
import { NavigationInjectedProps } from "react-navigation";

interface ActionScreenProps extends NavigationInjectedProps {}

export class ActionScreen extends React.Component<ActionScreenProps> {
  static navigationOptions = {
    title: "Action"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <Text>Attack</Text>
        <Text>Cast spell</Text>
        <Text>Dash</Text>
        <Text>Disengage</Text>
        <Text>Dodge</Text>
        <Text>Help</Text>
        <Text>Hide</Text>
        <Text>Ready</Text>
        <Text>Search</Text>
        <Text>Use object</Text>
      </ScrollView>
    );
  }
}
