import React from "react";
import { View, ImageBackground, TouchableOpacity } from "react-native";
import { NavigationInjectedProps } from "react-navigation";
import { ProfileScreenProps, DefaultCharacterKey, getCharacterOrPlaceholder } from "./ProfileScreen";
import styled from "styled-components/native";
import { CinzelBold } from "../components/styledComponents/FontComponents";
import { updateCharacter } from "../store/actions/characterActions";
import { useDispatch } from "react-redux";

interface HomeScreenProps extends NavigationInjectedProps {}

const ButtonContainer = styled.View`
  margin: 20px;
  align-items: center;
`;

export const HomeScreen: React.FC<HomeScreenProps> = (props) => {
  const { navigate } = props.navigation;
  const dispatch = useDispatch();

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
            <CinzelBold size="30" color="#a81414">
              Start Combat
            </CinzelBold>
          </TouchableOpacity>
        </ButtonContainer>
        <ButtonContainer>
          <TouchableOpacity
            onPress={async () => {
              const character = await getCharacterOrPlaceholder(DefaultCharacterKey);
              dispatch(updateCharacter(character));
              const props: ProfileScreenProps = {
                currentCharacterValues: character,
              };
              navigate("Profile", props);
            }}
          >
            <CinzelBold size="30" color="#a81414">
              Character Settings
            </CinzelBold>
          </TouchableOpacity>
        </ButtonContainer>
      </ImageBackground>
    </View>
  );
};

HomeScreen.navigationOptions = { headerShown: false };
