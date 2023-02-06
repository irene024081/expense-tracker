import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpenses.css';

function NewExpenses(props) {
  const [showForm, changeShowForm] = useState(false);
  const saveExpenseHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
  };
  const showFormHandler = () => {
    changeShowForm(true);
  };
  const hideFormHandler = () => {
    changeShowForm(false);
  };
  return (
    <div className="new-expense">
      {!showForm && (
        <button onClick={showFormHandler}> Add New Expense </button>
      )}
      {showForm && (
        <ExpenseForm
          cancelForm={hideFormHandler}
          onSaveExpense={saveExpenseHandler}
        />
      )}
    </div>
  );
}

export default NewExpenses;
