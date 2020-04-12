import React, { useState } from "react";
import { View, Text, Button } from "react-native";

export const MoveCounter = (props) => {
  const [selectedMoves, updateSelectedMoves] = useState([])

  return (
    <View>
    <Button title="diagonal" onPress = {() => updateSelectedMoves([...selectedMoves, "diagonal"])} />
    <Button title="orthagonal" onPress = {() => updateSelectedMoves([...selectedMoves, "orthagonal"])}/>
    {selectedMoves.map((move, index) => <Text key={index}>{move}</Text>)}
    </View>
  );
};
