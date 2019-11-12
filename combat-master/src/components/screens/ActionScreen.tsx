import React from "react";
import { View, Button } from "react-native";
import { NavigationInjectedProps } from "react-navigation";

interface ActionScreenProps extends NavigationInjectedProps {}

export class ActionScreen extends React.Component<ActionScreenProps> {
  static navigationOptions = {
    title: "Action"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Button
          title="Take action"
          onPress={() => alert("Taking an action!")}
        />
      </View>
    );
  }
}
