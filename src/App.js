import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e2",
    title: "Toilet Paper",
    amount: 5.99,
    date: new Date(2021, 2, 26),
  },
  {
    id: "e3",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 3, 10),
  },
  {
    id: "e4",
    title: "Console Game",
    amount: 549.99,
    date: new Date(2021, 3, 11),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
