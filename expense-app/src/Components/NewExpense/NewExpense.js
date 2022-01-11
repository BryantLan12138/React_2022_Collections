import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import React, { useState } from "react";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const addExpenseDataHandler = (expenseData) => {
    const newExpenseData = {
      ...expenseData,
      id: Math.random().toString(),
    };
    // console.log(newExpenseData);
    // return newExpenseData;
    props.onAddNewExpense(newExpenseData);
  };

  const addButtonHandler = () => {
    setIsEditing(true);
  };

  const cancelButtonHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button action="submit" onClick={addButtonHandler}>
          Add Expense
        </button>
      )}

      {isEditing && (
        <ExpenseForm
          onAddExpenseData={addExpenseDataHandler}
          onCancel={cancelButtonHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
