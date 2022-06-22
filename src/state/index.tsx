import { createContext, useReducer } from "react";
import reducer from "./reducer";

const initialState = {};

export const StateContext = createContext(initialState);

export default ({ children }) => {
  const store = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={store}>{children}</StateContext.Provider>
  );
};
