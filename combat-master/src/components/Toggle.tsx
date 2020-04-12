import React, { useState } from "react";
import { Text } from "react-native";
import styled from "styled-components";

export interface ToggleProps {
  label: string;
  bodyText: string;
}

const Label = styled.Text`
  font-size: 20;
  font-weight: bold;
  background-color: ${(props) => (props.expanded ? "papayawhip" : "white")};
`;

export const Toggle: React.FC<ToggleProps> = (props: ToggleProps) => {
  const { label, bodyText } = props;

  const [expanded, toggleExpand] = useState(false);

  return (
    <>
      <Label onPress={() => toggleExpand(!expanded)} expanded={expanded}>
        {label}
      </Label>
      {expanded ? <Text>{bodyText}</Text> : null}
    </>
  );
};
