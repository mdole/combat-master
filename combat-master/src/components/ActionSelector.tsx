import React from "react";
import styled from "styled-components/native";
import { lightBlue } from "../styles/colors";
import { CinzelRegular } from "./styledComponents/FontComponents";

export interface ActionSelectorProps {
  label: string;
  bodyText?: string;
  isCurrentlySelectedAction: boolean;
  updateParentState: { (valueToUpdate: React.SetStateAction<string>): void };
}

const ButtonWrapper = styled.TouchableOpacity`
  border: 1px solid #000;
  background-color: white;
  border-radius: 2px;
  margin-bottom: 10px;
`;

const Label = styled(CinzelRegular)<{ selected: boolean }>`
  background-color: ${(props) => (props.selected ? `${lightBlue}` : "white")};
  text-align: center;
`;

export const ActionSelector: React.FC<ActionSelectorProps> = (props: ActionSelectorProps) => {
  const { label, isCurrentlySelectedAction, updateParentState } = props;

  return (
    <ButtonWrapper onPress={() => updateParentState(label)}>
      <Label size="18" style={{ lineHeight: 30 }} selected={isCurrentlySelectedAction}>
        {label}
      </Label>
    </ButtonWrapper>
  );
};
