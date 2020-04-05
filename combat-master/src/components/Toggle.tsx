import React, { useState } from "react";
import { Button, Text } from "react-native";

export const Toggle: React.FC = (props) => {
  const [expanded, toggleExpand] = useState(false);

  const checkExpanded = () => {};
  return (
    <>
      <Button title="Attack" onPress={() => toggleExpand(!expanded)} />
      {expanded ? <Text>Cast spell</Text> : null}
    </>
  );
};
