import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpenseFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onchangeHandler={filterChangeHandler}
      ></ExpenseFilter>
      {props.expenses.map((expense, index) => {
        return (
          <div>
            <ExpenseItem
              key={expense.id}
              date={expense.date}
              title={expense.title}
              price={expense.price}
            ></ExpenseItem>
          </div>
        );
      })}
    </div>
  );
}

export default Expenses;
