import { UPDATE_CHARACTER } from "../actions/actionTypes";
import { CharacterValues } from "../../screens/ProfileScreen";

const initialState: CharacterValues = {
  name: "Xavier Xiloscient",
  class: "Bard",
  level: 6,
  race: "Elf",
  bonusActions: [],
};

const characterReducer = (state = initialState, action): CharacterValues => {
  switch (action.type) {
    case UPDATE_CHARACTER:
      return {
        ...state,
        name: action.payload.name,
        class: action.payload.class,
        level: action.payload.level,
        race: action.payload.race,
        bonusActions: action.payload.bonusActions,
      };
    default:
      return state;
  }
};

export default characterReducer;
