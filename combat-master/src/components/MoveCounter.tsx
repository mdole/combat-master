import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { updateSelectedMoves, clearMoves, undoLastMove } from "../store/actions";
import styled from "styled-components/native";
import { CinzelRegular, LatoLight } from "./styledComponents/FontComponents";
import { parchment, lightBlue, paleGreen } from "../styles/colors";

interface MoveCounterProps {
  movementInFeet: number;
  updateMovementInFeet: any;
}

const MovementButton = styled.TouchableOpacity<{ color?: string }>`
  background: ${(props) => (props.color ? props.color : "#fff")};
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

const MovementLog = styled.View`
  background: ${parchment};
  align-items: center;
  margin: 20px;
  padding: 20px;
  height: 75%;
  overflow: hidden;
`;

export const MoveCounter: React.FC<MoveCounterProps> = (props) => {
  const state = useSelector((state) => state.actionReducer);
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
        <MovementButton color={lightBlue} onPress={() => dispatch(updateSelectedMoves("diagonal"))}>
          <CinzelRegular size="20">Diagonal</CinzelRegular>
        </MovementButton>
        <MovementButton color={paleGreen} onPress={() => dispatch(updateSelectedMoves("orthogonal"))}>
          <CinzelRegular size="20">Orthogonal</CinzelRegular>
        </MovementButton>
      </ButtonContainer>
      <MovementLog>
        <LatoLight size="30">Total movement (ft):</LatoLight>
        <LatoLight size="30">{movementInFeet}</LatoLight>
        {state.selectedMoves.map((move: string, index) => (
          <LatoLight size="20" key={index}>
            {move}
          </LatoLight>
        ))}
      </MovementLog>
      <ButtonContainer>
        <MovementButton
          onPress={() => {
            dispatch(undoLastMove());
          }}
        >
          <CinzelRegular size="20">Undo</CinzelRegular>
        </MovementButton>
        <MovementButton
          onPress={() => {
            dispatch(clearMoves());
          }}
        >
          <CinzelRegular size="20">Clear</CinzelRegular>
        </MovementButton>
      </ButtonContainer>
    </View>
  );
};
