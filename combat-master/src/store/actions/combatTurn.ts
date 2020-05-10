import {
  UPDATE_ACTION,
  UPDATE_MOVEMENT,
  UPDATE_BONUS_ACTION,
  UPDATE_SELECTED_MOVES,
  UNDO_LAST_MOVE,
  CLEAR_MOVES,
} from "./actionTypes";

export const updateSelectedAction = (selectedAction: string) => {
  return {
    type: UPDATE_ACTION,
    payload: selectedAction,
  };
};

export const updateSelectedMovement = (selectedMovement: number) => {
  return {
    type: UPDATE_MOVEMENT,
    payload: selectedMovement,
  };
};

export const updateSelectedMoves = (newMove: string) => {
  return {
    type: UPDATE_SELECTED_MOVES,
    payload: newMove,
  };
};

export const undoLastMove = () => {
  return {
    type: UNDO_LAST_MOVE,
  };
};

export const clearMoves = () => {
  return {
    type: CLEAR_MOVES,
  };
};

export const updateBonusAction = (selectedBonusAction: string) => {
  return {
    type: UPDATE_BONUS_ACTION,
    payload: selectedBonusAction,
  };
};
