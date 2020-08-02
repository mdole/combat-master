import { configureStore } from "@reduxjs/toolkit";
import actionReducer from "./reducers/actionReducer";
import characterReducer from "./reducers/characterReducer";

const reducer = {
  actionReducer: actionReducer,
  characterReducer: characterReducer,
};

export const store = configureStore({ reducer });
