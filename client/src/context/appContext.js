import React, { useState, useEffect, useContext, useReducer } from "react";
import reducer from "./reducer";
import { SHOW_MESSAGE, HIDE_MESSAGE } from "./actions";

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
    hideMessage();
  };

  const hideMessage = () => {
    setTimeout(() => {
      dispatch({ type: HIDE_MESSAGE });
    }, 3000);
  };

  return (
    <AppContext.Provider value={{ ...state, displayMessage, hideMessage }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
