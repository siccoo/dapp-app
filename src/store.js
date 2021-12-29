import React, { useReducer, useContext, createContext } from "react";

const StoreContext = createContext();

const initialState = {
  message: "",
  address: null,
  balance: 0,
};

const reducer = (action, state) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "NEW-ADDRESS":
      return {
        ...state,
        address: action.newAddress,
        message: action.message,
      };
    case "SET-BALANCE":
      return {
        ...state,
        balance: action.newBalance,
      };

    default:
      throw new Error(`Type of action unknown ${action.type}`);
  }
};

export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return <StoreContext.Provider>{children}</StoreContext.Provider>;
};
