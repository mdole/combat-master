import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";

interface MoveCounterProps {
  movementInFeet: number;
  updateMovementInFeet: any;
}

export const MoveCounter: React.FC<MoveCounterProps> = (props) => {
  const [selectedMoves, updateSelectedMoves] = useState([]);
  const { movementInFeet, updateMovementInFeet } = props;
  useEffect(() => {
    let newMovement = 0;
    let alternativeDiagonal = false;
    selectedMoves.forEach((move) => {
      if (move === "diagonal") {
        if (alternativeDiagonal) {
          newMovement += 10;
        } else {
          newMovement += 5;
        }
        alternativeDiagonal = !alternativeDiagonal;
      } else if (move === "orthogonal") {
        newMovement += 5;
      }
    });
    updateMovementInFeet(newMovement);
  }, [selectedMoves]);

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
      <Text>Total movement (feet): {movementInFeet}</Text>
    </View>
  );
};
