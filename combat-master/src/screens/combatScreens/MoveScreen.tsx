import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View } from "react-native";
import { NavigationInjectedProps } from "react-navigation";
import { MoveCounter } from "../../components/MoveCounter";
import { updateSelectedMovement } from "../../store/actions";
import { FinishedButton } from "../../components/FinishedButton";

interface MoveScreenProps extends NavigationInjectedProps {}

export const MoveScreen: React.FC<MoveScreenProps> = (props) => {
  const { navigate } = props.navigation;
  const dispatch = useDispatch();
  const state = useSelector((state) => state.actionReducer);
  const [movementInFeet, updateMovementInFeet] = useState(state.selectedMovement);

  return (
    <View>
      <MoveCounter movementInFeet={movementInFeet} updateMovementInFeet={updateMovementInFeet} />
      <FinishedButton
        onPress={() => {
          dispatch(updateSelectedMovement(movementInFeet));
          navigate("MainCombatAction");
        }}
      />
    </View>
  );
};

MoveScreen.navigationOptions = { title: "Move" };
