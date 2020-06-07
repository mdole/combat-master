import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Button, TouchableOpacity } from "react-native";
import { NavigationInjectedProps } from "react-navigation";
import { MoveCounter } from "../../components/MoveCounter";
import { updateSelectedMovement } from "../../store/actions";
import { CinzelBold } from "../../components/styledComponents/FontComponents";

interface MoveScreenProps extends NavigationInjectedProps {}

export const MoveScreen: React.FC<MoveScreenProps> = (props) => {
  const { navigate } = props.navigation;
  const dispatch = useDispatch();
  const state = useSelector((state) => state.actionReducer);
  const [movementInFeet, updateMovementInFeet] = useState(state.selectedMovement);

  return (
    <View>
      <MoveCounter movementInFeet={movementInFeet} updateMovementInFeet={updateMovementInFeet} />
      <TouchableOpacity
        onPress={() => {
          dispatch(updateSelectedMovement(movementInFeet));
          navigate("MainCombatAction");
        }}
        style={{ alignItems: "center" }}
      >
        <CinzelBold size="35">Finished</CinzelBold>
      </TouchableOpacity>
    </View>
  );
};

MoveScreen.navigationOptions = { title: "Move" };
