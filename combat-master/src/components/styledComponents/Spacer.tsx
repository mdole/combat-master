import styled from "styled-components/native";

interface SpacerProps {
  width?: string;
  height?: string;
}

export const Spacer = styled.View<SpacerProps>`
  width: ${(props) => (props.width ? props.width : "10px")};
  height: ${(props) => (props.height ? props.height : "10px")};
`;
