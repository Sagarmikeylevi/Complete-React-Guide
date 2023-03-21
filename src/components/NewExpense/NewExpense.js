import React, { useState } from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const [isEditing , setIsEditing] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
        ...enteredExpenseData,
        id: Math.random().toString()
       };
       props.onAddExpense(expenseData);
       setIsEditing(false);
    }

    const startEditingHandler = () => {
        setIsEditing(true);
    }
    
    const cancelEditingHandler = () => {
        setIsEditing(false);
    }
    return (
      <div className="new-expense">
        {!isEditing && (
          <button onClick={startEditingHandler}>Add New Expenses</button>
        )}

        {isEditing && (
          <ExpenseForm
            onSaveExpenseData={saveExpenseDataHandler}
            onCancelEditing={cancelEditingHandler}
          />
        )}
      </div>
    );
}

export default NewExpense;