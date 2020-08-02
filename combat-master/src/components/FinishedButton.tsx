import React from "react";
import { TouchableOpacity, GestureResponderEvent } from "react-native";
import { CinzelBold } from "./styledComponents/FontComponents";

export const FinishedButton: React.SFC<{ onPress: (event: GestureResponderEvent) => void; text?: string }> = ({
  onPress,
  text = "Finished",
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ alignItems: "center" }}>
      <CinzelBold size="35">{text}</CinzelBold>
    </TouchableOpacity>
  );
};
