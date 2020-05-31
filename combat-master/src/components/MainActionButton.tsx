import React from "react";
import { NavigationInjectedProps } from "react-navigation";
import styled from "styled-components/native";
import { CinzelRegular, LatoLight } from "./styledComponents/FontComponents";

interface MainActionButtonProps extends NavigationInjectedProps {
  buttonText: string;
  destination: string;
  secondaryText?: string;
}

const LargeButton = styled.TouchableOpacity`
  flex: 1;
  color: black;
  background-color: rgba(245, 237, 214, 0.5);
  margin: 5%;
  margin-bottom: 0%;
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
