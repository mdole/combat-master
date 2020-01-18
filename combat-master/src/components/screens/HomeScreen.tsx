import React from "react";
import { StyleSheet, View, Button } from "react-native";
import { NavigationInjectedProps } from "react-navigation";
import { ProfileScreenProps, DefaultCharacterKey, getCharacterOrPlaceholder } from "./ProfileScreen";

interface HomeScreenProps extends NavigationInjectedProps {}

export const HomeScreen: React.FC<HomeScreenProps> = props => {
  const { navigate } = props.navigation;
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          title="Start Combat"
          color="#434343"
          onPress={() => {
            navigate("MainCombatAction");
          }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Character settings"
          onPress={async () => {
            const character = await getCharacterOrPlaceholder(DefaultCharacterKey);
            const props: ProfileScreenProps = {
              currentCharacterValues: character
            };
            navigate("Profile", props);
          }}
        />
      </View>
    </View>
  );
};

HomeScreen.navigationOptions = { title: "Welcome" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonContainer: {
    margin: 20
  },
  mainButtonContainer: {
    flex: 1
  },
  buttonRow: {
    margin: 20
  }
});
