import React from "react";
import { View, ImageBackground, TouchableOpacity } from "react-native";
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
  color: #a81414;
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
          <TouchableOpacity onPress={() => navigate("MainCombatAction")}>
            <ButtonText>Start Combat</ButtonText>
          </TouchableOpacity>
        </ButtonContainer>
        <ButtonContainer>
          <TouchableOpacity
            onPress={async () => {
              const character = await getCharacterOrPlaceholder(DefaultCharacterKey);
              const props: ProfileScreenProps = {
                currentCharacterValues: character,
              };
              navigate("Profile", props);
            }}
          >
            <ButtonText>Character settings</ButtonText>
          </TouchableOpacity>
        </ButtonContainer>
      </ImageBackground>
    </View>
  );
};

HomeScreen.navigationOptions = { headerShown: false };
