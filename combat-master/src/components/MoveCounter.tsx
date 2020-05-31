import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { updateSelectedMoves, clearMoves, undoLastMove } from "../store/actions";
import styled from "styled-components/native";
import { CinzelRegular, LatoLight } from "./styledComponents/FontComponents";

interface MoveCounterProps {
  movementInFeet: number;
  updateMovementInFeet: any;
}

const MovementButton = styled.TouchableOpacity`
  background: rgba(86, 204, 242, 0.25);
  border: 1px solid #000000;
  border-radius: 2px;
  width: 170px;
  height: 50px;
  align-items: center;
  justify-content: center;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
`;

const MovementContainer = styled.View`
  background: rgba(245, 237, 214, 0.5);
  align-items: center;
  margin: 20px;
  padding: 20px;
  height: 75%;
  overflow: hidden;
`;

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
      <ButtonContainer>
        <MovementButton onPress={() => dispatch(updateSelectedMoves("diagonal"))}>
          <CinzelRegular size="20">Diagonal</CinzelRegular>
        </MovementButton>
        <MovementButton onPress={() => dispatch(updateSelectedMoves("orthogonal"))}>
          <CinzelRegular size="20">Orthogonal</CinzelRegular>
        </MovementButton>
      </ButtonContainer>
      <MovementContainer>
        <LatoLight size="30">Total movement (feet):</LatoLight>
        <LatoLight size="30">{movementInFeet}</LatoLight>
        {state.selectedMoves.map((move: string, index) => (
          <LatoLight size="20" key={index}>
            {move}
          </LatoLight>
        ))}
      </MovementContainer>
      <ButtonContainer>
        <MovementButton
          onPress={() => {
            dispatch(undoLastMove());
          }}
        >
          <CinzelRegular size="20">Undo last move</CinzelRegular>
        </MovementButton>
        <MovementButton
          onPress={() => {
            dispatch(clearMoves());
          }}
        >
          <CinzelRegular size="20">Clear moves</CinzelRegular>
        </MovementButton>
      </ButtonContainer>
    </View>
  );
};
