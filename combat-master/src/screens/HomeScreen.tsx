import React, { useEffect } from "react";
import { View, ImageBackground, TouchableOpacity, Dimensions } from "react-native";
import { getCharacterOrPlaceholder } from "./ProfileScreen";
import styled from "styled-components/native";
import { CinzelBold } from "../components/styledComponents/FontComponents";
import { updateCharacter } from "../store/actions/characterActions";
import { useDispatch, useSelector } from "react-redux";
import { darkRed, parchment } from "../styles/colors";

interface HomeScreenProps {}

const ButtonContainer = styled.View`
  margin: 20px;
  align-items: center;
`;

export const HomeScreen: React.FC<HomeScreenProps> = (props) => {
  const { navigate } = props.navigation;
  const dispatch = useDispatch();
  const state = useSelector((state) => state.characterReducer);

  useEffect(() => {
    async function getCharacter() {
      const character = await getCharacterOrPlaceholder(state);
      dispatch(updateCharacter(character));
    }

    getCharacter();
  }, []);

  var { width, height } = Dimensions.get("window");

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <ImageBackground
        source={require("../../../assets/splash.jpg")}
        style={{ flex: 1, width: "100%", height: "100%", position: "absolute" }}
      />
      <View
        style={{
          flex: 1,
          position: "absolute",
          left: 0,
          top: 0,
          opacity: 0.35,
          backgroundColor: "black",
          width: width,
          height: height,
        }}
      />
      <ButtonContainer>
        <TouchableOpacity onPress={() => navigate("MainCombatAction")}>
          <CinzelBold
            size="45"
            color={"white"}
            style={{ textShadowColor: darkRed, textShadowRadius: 5, textAlign: "center" }}
          >
            Start Combat
          </CinzelBold>
        </TouchableOpacity>
      </ButtonContainer>
      <ButtonContainer>
        <TouchableOpacity
          onPress={() => {
            navigate("Profile");
          }}
        >
          <CinzelBold
            size="25"
            color={"white"}
            style={{ textShadowColor: darkRed, textShadowRadius: 5, textAlign: "center" }}
          >
            Character Settings
          </CinzelBold>
        </TouchableOpacity>
      </ButtonContainer>
    </View>
  );
};
