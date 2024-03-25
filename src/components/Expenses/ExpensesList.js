import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  const ExpenseContent = props.items.map((expense) => (
    <ExpenseItem
      key={expense.id}
      date={expense.date}
      title={expense.title}
      price={expense.price}
    ></ExpenseItem>
  ));
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses Found</h2>;
  } else if (props.items.length === 1) {
    return (
      <div>
        <ul className="expenses-list">{ExpenseContent} </ul>
        <h2 className="expenses-list__fallback">Only 1 Expense Found</h2>
      </div>
    );
  }
  return <ul className="expenses-list">{ExpenseContent}</ul>;
};

export default ExpensesList;
