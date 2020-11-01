import React from "react";
import styled from "styled-components/native";
import { CinzelRegular, LatoLight } from "./styledComponents/FontComponents";
import { parchment } from "../styles/colors";

interface MainActionButtonProps {
  buttonText: string;
  destination: string;
  secondaryText?: string;
}

const LargeButton = styled.TouchableOpacity`
  flex: 1;
  color: black;
  background-color: ${parchment};
  /* margin: 5%;
  margin-bottom: 0%; */
  align-items: center;
  justify-content: center;
`;

export const MainActionButton: React.FC<MainActionButtonProps> = (props) => {
  const { navigate } = props.navigation;
  return (
    <LargeButton onPress={() => navigate(props.destination)}>
      <CinzelRegular size="30">{props.buttonText}</CinzelRegular>
      <LatoLight size="15">{props.secondaryText}</LatoLight>
    </LargeButton>
  );
};
