import React from "react";
import { createContext } from "react";
import { useContext, useState } from "react";

const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
  const [expenses, setExpense] = useState([]);

  return (
    <ExpenseContext.Provider value={{ expenses, setExpense }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export const useExpenses = () => useContext(ExpenseContext);
