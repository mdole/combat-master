import { UPDATE_MOVEMENT, UPDATE_ACTION, UPDATE_BONUS_ACTION } from "../actions/actionTypes";

const initialState = {
  selectedMovement: 0,
  selectedAction: "Attack",
  selectedBonusAction: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_MOVEMENT:
      return {
        ...state,
        selectedMovement: action.payload,
      };
    case UPDATE_ACTION:
      return {
        ...state,
        selectedAction: action.payload,
      };
    case UPDATE_BONUS_ACTION:
      return {
        ...state,
        selectedBonusAction: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
