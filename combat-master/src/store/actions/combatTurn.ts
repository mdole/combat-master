import { UPDATE_ACTION, UPDATE_MOVEMENT, UPDATE_BONUS_ACTION } from "./actionTypes";

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

export const updateBonusAction = (selectedBonusAction: string) => {
  return {
    type: UPDATE_BONUS_ACTION,
    payload: selectedBonusAction,
  };
};
