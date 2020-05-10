import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import styled from "styled-components";

export interface ToggleProps {
  label: string;
  bodyText: string;
  isCurrentlySelectedAction: boolean;
  updateParentState: { (valueToUpdate: React.SetStateAction<string>): void };
}

const Label = styled.Text`
  font-size: 20;
  font-weight: bold;
  background-color: ${(props) => (props.expanded ? "papayawhip" : "white")};
`;

export const Toggle: React.FC<ToggleProps> = (props: ToggleProps) => {
  const { label, bodyText, isCurrentlySelectedAction, updateParentState } = props;

  return (
    <>
      <Label onPress={() => updateParentState(label)} expanded={isCurrentlySelectedAction}>
        {label}
      </Label>
      {isCurrentlySelectedAction ? <Text>{bodyText}</Text> : null}
    </>
  );
};
