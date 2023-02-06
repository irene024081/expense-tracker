import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from '../ExpenseFilter/ExpensesFilter';

function Expenses(props) {
  const expenses = props.items;
  const [selectedYear, setYearOption] = useState('2019');
  const selectYearHandler = yearData => {
    setYearOption(yearData);
    console.log(yearData);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectedYear}
        onSelectYear={selectYearHandler}
      ></ExpensesFilter>

      {expenses
        .filter(expense => {
          return expense.date.getFullYear().toString() === selectedYear;
        })
        .map(expense => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            ></ExpenseItem>
          );
        })}
    </Card>
  );
}

export default Expenses;
