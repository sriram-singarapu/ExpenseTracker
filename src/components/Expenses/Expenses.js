import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
//import Card from "../UI/Card";

function Expenses(props) {
  return (
    <div className="expenses">
      {props.expenses.map((expense, index) => {
        return (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            price={expense.price}
          ></ExpenseItem>
        );
      })}
    </div>
  );
}

export default Expenses;
