import React from "react";
import { View, Button } from "react-native";
import { NavigationInjectedProps } from "react-navigation";

interface MoveScreenProps extends NavigationInjectedProps {}

export class MoveScreen extends React.Component<MoveScreenProps> {
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
