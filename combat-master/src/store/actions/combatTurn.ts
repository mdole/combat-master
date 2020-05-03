import { UPDATE_ACTION, UPDATE_MOVEMENT, UPDATE_BONUS_ACTION } from "./actionTypes";

export const updateSelectedAction = (selectedAction) => {
  return {
    type: UPDATE_ACTION,
    payload: selectedAction,
  };
};

export const updateSelectedMovement = (selectedMovement) => {
  return {
    type: UPDATE_MOVEMENT,
    payload: selectedMovement,
  };
};

export const updateBonusAction = (selectedBonusAction) => {
  return {
    type: UPDATE_BONUS_ACTION,
    payload: selectedBonusAction,
  };
};
