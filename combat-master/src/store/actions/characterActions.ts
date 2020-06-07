import { UPDATE_CHARACTER } from "./actionTypes";
import { CharacterValues } from "../../screens/ProfileScreen";

export const updateCharacter = (Character: CharacterValues) => {
  return {
    type: UPDATE_CHARACTER,
    payload: Character,
  };
};
