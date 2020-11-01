import React, { useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { updateSelectedMoves, clearMoves, undoLastMove } from "../store/actions";
import styled from "styled-components/native";
import { CinzelRegular, LatoLight } from "./styledComponents/FontComponents";
import { parchment, lightBlue, paleGreen } from "../styles/colors";

interface MoveCounterProps {
  movementInFeet: number;
  updateMovementInFeet: any;
}

const Spacer = styled.View`
  width: 10px;
`;

const MovementButton = styled.TouchableOpacity<{ color?: string }>`
  background: ${(props) => (props.color ? props.color : "#fff")};
  border: 1px solid #000000;
  border-radius: 2px;
  flex: 1;
  height: 50px;
  align-items: center;
  justify-content: center;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  margin: 10px;
`;

const MovementLog = styled.View`
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
  padding: 20px;
  flex: 1;
  overflow: hidden;
  background-color: white;
  border: solid 1px #000;
  border-radius: 2px;
`;

export const MoveCounter: React.FC<MoveCounterProps> = (props) => {
  const state = useSelector((state) => state.actionReducer);
  const dispatch = useDispatch();
  const [contentHeight, setContentHeight] = useState(0);
  const [scrollViewHeight, setScrollViewHeight] = useState(0);

  const scrollEnabled = contentHeight > scrollViewHeight;

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
    <View style={{ flex: 10 }}>
      <ButtonContainer>
        <MovementButton color={lightBlue} onPress={() => dispatch(updateSelectedMoves("diagonal"))}>
          <CinzelRegular size="20">Diagonal</CinzelRegular>
        </MovementButton>
        <Spacer />
        <MovementButton color={paleGreen} onPress={() => dispatch(updateSelectedMoves("orthogonal"))}>
          <CinzelRegular size="20">Orthogonal</CinzelRegular>
        </MovementButton>
      </ButtonContainer>
      <MovementLog>
        <LatoLight size="30">Total movement (ft):</LatoLight>
        <LatoLight size="30">{movementInFeet}</LatoLight>
        <ScrollView
          scrollEnabled={scrollEnabled}
          onLayout={(event) => setScrollViewHeight(event.nativeEvent.layout.height)}
          onContentSizeChange={(_width, height) => setContentHeight(height)}
          contentContainerStyle={{ alignItems: "center" }}
          style={{ width: "100%" }}
        >
          {state.selectedMoves.map((move: string, index) => (
            <LatoLight size="20" key={index}>
              {move}
            </LatoLight>
          ))}
        </ScrollView>
      </MovementLog>
      <ButtonContainer>
        <MovementButton
          onPress={() => {
            dispatch(undoLastMove());
          }}
        >
          <CinzelRegular size="20">Undo</CinzelRegular>
        </MovementButton>
        <Spacer />
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
