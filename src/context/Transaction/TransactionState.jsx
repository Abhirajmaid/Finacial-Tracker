import React, { createContext, useReducer, useState } from "react";
import AppReducer from "../AppReducer";

const initialState = {
  transactions: [],
};

export const TransactionsContext = createContext(initialState);

export const TransactionsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };
  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };

  return (
    <TransactionsContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};
