import { UPDATE_CHARACTER, UPDATE_CHARACTER_BONUS_ACTIONS } from "./actionTypes";
import { CharacterValues } from "../../screens/ProfileScreen";
import { BonusAction } from "../../screens";

export const updateCharacter = (Character: CharacterValues) => {
  return {
    type: UPDATE_CHARACTER,
    payload: Character,
  };
};

export const updateCharacterBonusActions = (BonusActions: BonusAction[]) => {
  return {
    type: UPDATE_CHARACTER_BONUS_ACTIONS,
    payload: BonusActions,
  };
};
