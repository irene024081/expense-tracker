import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpenses.css';

function NewExpenses(props) {
  const saveExpenseHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpense={saveExpenseHandler} />
    </div>
  );
}

export default NewExpenses;
