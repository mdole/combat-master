import styled from "styled-components/native";

export const CinzelRegular = styled.Text`
  font-family: Cinzel_400Regular;
  font-size: ${(props) => props.size};
  color: ${(props) => (props.color ? props.color : "black")};
`;

export const CinzelBold = styled.Text`
  font-family: Cinzel_700Bold;
  font-size: ${(props) => props.size};
  color: ${(props) => (props.color ? props.color : "black")};
`;

export const LatoLight = styled.Text`
  font-family: Lato_300Light;
  font-size: ${(props) => props.size};
  color: ${(props) => (props.color ? props.color : "black")};
`;
