import {
  UPDATE_MOVEMENT,
  UPDATE_ACTION,
  UPDATE_BONUS_ACTION,
  UPDATE_SELECTED_MOVES,
  UNDO_LAST_MOVE,
  CLEAR_MOVES,
} from "../actions/actionTypes";

const initialState = {
  selectedMovement: 0,
  selectedMoves: [],
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
    case UPDATE_SELECTED_MOVES:
      return {
        ...state,
        selectedMoves: [...state.selectedMoves, action.payload],
      };
    case UNDO_LAST_MOVE:
      return {
        ...state,
        selectedMoves: [...state.selectedMoves].slice(0, state.selectedMoves.length - 1),
      };
    case CLEAR_MOVES:
      return {
        ...state,
        selectedMoves: [],
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
