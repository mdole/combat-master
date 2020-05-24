import React from "react";
import { NavigationInjectedProps } from "react-navigation";
import styled from "styled-components/native";

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

const ButtonText = styled.Text`
  font-family: Cinzel_400Regular;
  font-size: 30px;
`;

const SecondaryText = styled.Text`
  font-size: 15px;
  font-family: Lato_300Light;
`;

export const MainActionButton: React.FC<MainActionButtonProps> = (props) => {
  const { navigate } = props.navigation;
  return (
    <LargeButton onPress={() => navigate(props.destination)}>
      <ButtonText>{props.buttonText}</ButtonText>
      <SecondaryText>{props.secondaryText}</SecondaryText>
    </LargeButton>
  );
};
