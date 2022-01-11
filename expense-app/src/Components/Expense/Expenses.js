import ExpensesFilter from "../ExpenseFiltering/ExpensesFilter";
import Card from "../UI/Card";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2022");
  const selectedYearHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  // filter expenses based on selected year
  const selectedExpenses = props.expenses.filter((expense) => {
    // use should change Date object format to string to compare
    return expense.date.getFullYear().toString() === selectedYear;
  });

  // console.log(selectedExpenses);

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          select={selectedYear}
          onSelectedYear={selectedYearHandler}
        />
        <ExpenseChart expenses={selectedExpenses} />
        <ExpensesList items={selectedExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
