import React from "react";
import { View, Button } from "react-native";
import { NavigationInjectedProps } from "react-navigation";

interface ProfileScreenProps extends NavigationInjectedProps {}

export class ProfileScreen extends React.Component<ProfileScreenProps> {
  static navigationOptions = {
    title: "Profile"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Button title="Home" onPress={() => navigate("Home")} />
      </View>
    );
  }
}
