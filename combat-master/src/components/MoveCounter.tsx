import React, { useState } from "react";
import { View, Text, Button } from "react-native";

export const MoveCounter = (props) => {
  const [selectedMoves, updateSelectedMoves] = useState([]);

  return (
    <View>
      <Button title="Diagonal" onPress={() => updateSelectedMoves([...selectedMoves, "diagonal"])} />
      <Button title="Orthogonal" onPress={() => updateSelectedMoves([...selectedMoves, "orthogonal"])} />
      <Button
        title="Undo last move"
        onPress={() => {
          let newArray = [...selectedMoves];
          newArray.pop();
          return updateSelectedMoves(newArray);
        }}
      />
      {selectedMoves.map((move, index) => (
        <Text key={index}>{move}</Text>
      ))}
    </View>
  );
};
