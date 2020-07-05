import React from "react";
import styled from "styled-components/native";
import { lightBlue } from "../styles/colors";
import { CinzelRegular } from "./styledComponents/FontComponents";

export interface ActionSelectorProps {
  label: string;
  bodyText: string;
  isCurrentlySelectedAction: boolean;
  updateParentState: { (valueToUpdate: React.SetStateAction<string>): void };
}

const ButtonWrapper = styled.TouchableOpacity<{ selected: boolean }>`
  border: 1px solid #000;
  align-items: center;
  background-color: ${(props) => (props.selected ? `${lightBlue}` : "white")};
  border-radius: 2px;
`;

export const ActionSelector: React.FC<ActionSelectorProps> = (props: ActionSelectorProps) => {
  const { label, isCurrentlySelectedAction, updateParentState } = props;

  return (
    <ButtonWrapper onPress={() => updateParentState(label)} selected={isCurrentlySelectedAction}>
      <CinzelRegular size="18" style={{ lineHeight: 30 }}>
        {label}
      </CinzelRegular>
    </ButtonWrapper>
  );
};
