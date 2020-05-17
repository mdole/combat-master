import React from "react";
import { StyleSheet, View, Button, ImageBackground, TouchableHighlight, Text } from "react-native";
import { NavigationInjectedProps } from "react-navigation";
import { ProfileScreenProps, DefaultCharacterKey, getCharacterOrPlaceholder } from "./ProfileScreen";

interface HomeScreenProps extends NavigationInjectedProps {}

export const HomeScreen: React.FC<HomeScreenProps> = (props) => {
  const { navigate } = props.navigation;
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri:
            "https://static2.thegamerimages.com/wordpress/wp-content/uploads/2020/04/The-Lost-Mine-Of-Phandelver-Cover-Dungeons-Dragons.jpg",
        }}
        style={{ flex: 1, resizeMode: "cover", justifyContent: "center", width: "100%" }}
      >
        <View style={styles.buttonContainer}>
          <TouchableHighlight onPress={() => navigate("MainCombatAction")}>
            <Text style={styles.buttonText}>Start Combat</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableHighlight
            onPress={async () => {
              const character = await getCharacterOrPlaceholder(DefaultCharacterKey);
              const props: ProfileScreenProps = {
                currentCharacterValues: character,
              };
              navigate("Profile", props);
            }}
          >
            <Text style={styles.buttonText}>Character settings</Text>
          </TouchableHighlight>
        </View>
      </ImageBackground>
    </View>
  );
};

HomeScreen.navigationOptions = { headerShown: false };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    margin: 20,
    alignItems: "center",
  },
  mainButtonContainer: {
    flex: 1,
  },
  buttonText: {
    color: "red",
    fontWeight: "bold",
    fontSize: 40,
  },
  buttonRow: {
    margin: 20,
  },
});
