import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext(); //preparing data layer

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext); // helps to pull info from data layer
