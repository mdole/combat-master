import React from "react";
import { View, ImageBackground, TouchableHighlight } from "react-native";
import { NavigationInjectedProps } from "react-navigation";
import { ProfileScreenProps, DefaultCharacterKey, getCharacterOrPlaceholder } from "./ProfileScreen";
import styled from "styled-components/native";

interface HomeScreenProps extends NavigationInjectedProps {}

const ButtonContainer = styled.View`
  margin: 20px;
  align-items: center;
`;

const ButtonText = styled.Text`
  font-family: "Cinzel_700Bold";
  color: red;
  font-size: 30;
`;

export const HomeScreen: React.FC<HomeScreenProps> = (props) => {
  const { navigate } = props.navigation;
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={{
          uri:
            "https://static2.thegamerimages.com/wordpress/wp-content/uploads/2020/04/The-Lost-Mine-Of-Phandelver-Cover-Dungeons-Dragons.jpg",
        }}
        style={{ flex: 1, resizeMode: "cover", justifyContent: "center", width: "100%" }}
      >
        <ButtonContainer>
          <TouchableHighlight onPress={() => navigate("MainCombatAction")}>
            <ButtonText>Start Combat</ButtonText>
          </TouchableHighlight>
        </ButtonContainer>
        <ButtonContainer>
          <TouchableHighlight
            onPress={async () => {
              const character = await getCharacterOrPlaceholder(DefaultCharacterKey);
              const props: ProfileScreenProps = {
                currentCharacterValues: character,
              };
              navigate("Profile", props);
            }}
          >
            <ButtonText>Character settings</ButtonText>
          </TouchableHighlight>
        </ButtonContainer>
      </ImageBackground>
    </View>
  );
};

HomeScreen.navigationOptions = { headerShown: false };
