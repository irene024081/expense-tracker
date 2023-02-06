import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

function ExpensesList(props) {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback ">"No Expense Found."</h2>;
  }

  const expensesContent = props.items.map(expense => {
    return (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      ></ExpenseItem>
    );
  });

  return <ul className="expenses-list">{expensesContent}</ul>;
}

export default ExpensesList;
