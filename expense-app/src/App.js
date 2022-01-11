import Card from "./Components/UI/Card";
import Expenses from "./Components/Expense/Expenses";
import "./Components/Expense/Expenses.css";
import NewExpense from "./Components/NewExpense/NewExpense";
import React, { useState } from "react";

//Dummy data
const Dummy_Data = [
  {
    id: "e1",
    title: "React Course(Udemy)",
    amount: 24.99,
    date: new Date(2022, 0, 5),
  },
  {
    id: "e2",
    title: "Creativity and Innovation",
    amount: 4000.0,
    date: new Date(2021, 0, 17),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 1100.5,
    date: new Date(2021, 0, 13),
  },
  {
    id: "e4",
    title: "Gaming Chairs",
    amount: 300,
    date: new Date(2021, 11, 25),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(Dummy_Data);

  const newExpenseHandler = (expense) => {
    //function form to get previous data
    setExpenses((expenses) => [expense, ...expenses]);
    // console.log(expense);
  };

  return (
    <div className="App">
      <header className="App-header">
        <NewExpense onAddNewExpense={newExpenseHandler} />
        <Card className="expenses">
          <Expenses expenses={expenses} />
        </Card>
      </header>
    </div>
  );
};

export default App;
