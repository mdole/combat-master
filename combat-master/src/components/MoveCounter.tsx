import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { updateSelectedMoves, clearMoves, undoLastMove } from "../store/actions";

interface MoveCounterProps {
  movementInFeet: number;
  updateMovementInFeet: any;
}

export const MoveCounter: React.FC<MoveCounterProps> = (props) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const { movementInFeet, updateMovementInFeet } = props;
  useEffect(() => {
    let newMovement = 0;
    let alternativeDiagonal = false;
    state.selectedMoves.forEach((move) => {
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
  }, [state.selectedMoves]);

  return (
    <View>
      <Button title="Diagonal" onPress={() => dispatch(updateSelectedMoves("diagonal"))} />
      <Button title="Orthogonal" onPress={() => dispatch(updateSelectedMoves("orthogonal"))} />
      <Button
        title="Undo last move"
        onPress={() => {
          dispatch(undoLastMove());
        }}
      />
      <Button
        title="Clear moves"
        onPress={() => {
          dispatch(clearMoves());
        }}
      />
      {state.selectedMoves.map((move, index) => (
        <Text key={index}>{move}</Text>
      ))}
      <Text>Total movement (feet): {movementInFeet}</Text>
    </View>
  );
};
