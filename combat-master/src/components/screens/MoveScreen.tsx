import React from "react";
import { View, Button } from "react-native";
import SelectableGrid from "react-native-selectable-grid";
import { NavigationInjectedProps, ScrollView } from "react-navigation";

interface MoveScreenProps extends NavigationInjectedProps {}

const gridData = [
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "0" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" },
  { label: "" }
];

export class MoveScreen extends React.Component<MoveScreenProps> {
  static navigationOptions = {
    title: "Move"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <SelectableGrid data={gridData} maxPerRow={9} maxSelect={10} />
        <Button title="Finished" onPress={() => navigate("MainCombatAction")} />
      </ScrollView>
    );
  }
}
