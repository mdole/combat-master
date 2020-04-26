import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import styled from "styled-components";

export interface ToggleProps {
  label: string;
  bodyText: string;
  value: string;
  updateValue: { (valueToUpdate: React.SetStateAction<string>): void };
}

const Label = styled.Text`
  font-size: 20;
  font-weight: bold;
  background-color: ${(props) => (props.expanded ? "papayawhip" : "white")};
`;

export const Toggle: React.FC<ToggleProps> = (props: ToggleProps) => {
  const { label, bodyText, value, updateValue } = props;
  const [expanded, toggleExpand] = useState(false);

  useEffect(() => {
    value === label ? updateValue(label) : null;
  }, [value]);

  const updateEverything = () => {
    toggleExpand(!expanded);
    updateValue(label);
  };

  return (
    <>
      <Label onPress={() => updateEverything()} expanded={expanded}>
        {label}
      </Label>
      {expanded ? <Text>{bodyText}</Text> : null}
    </>
  );
};
