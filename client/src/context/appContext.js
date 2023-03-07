import React, { useState, useEffect, useContext, useReducer } from "react";
import reducer from "./reducer";
import { SHOW_MESSAGE } from "./actions";

const initialState = {
  showMessage: false,
  messageText: "",
  messageType: "",
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const displayMessage = () => {
    dispatch({ type: SHOW_MESSAGE });
  };

  return (
    <AppContext.Provider value={{ ...state, displayMessage }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
