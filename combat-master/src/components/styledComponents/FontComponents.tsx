import styled from "styled-components/native";

interface FontProps {
  size: string;
  color?: string;
}
export const CinzelRegular = styled.Text<FontProps>`
  font-family: Cinzel_400Regular;
  font-size: ${(props) => props.size};
  color: ${(props) => (props.color ? props.color : "black")};
`;

export const CinzelBold = styled.Text<FontProps>`
  font-family: Cinzel_700Bold;
  font-size: ${(props) => props.size};
  color: ${(props) => (props.color ? props.color : "black")};
`;

export const LatoLight = styled.Text<FontProps>`
  font-family: Lato_300Light;
  font-size: ${(props) => props.size};
  color: ${(props) => (props.color ? props.color : "black")};
`;
