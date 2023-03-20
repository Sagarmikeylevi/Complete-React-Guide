import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2023, 4, 21),
    },
    {
      id: "e2",
      title: "Gym Expenses",
      amount: 29.67,
      date: new Date(2022, 7, 21),
    },
    {
      id: "e3",
      title: "Home Rent",
      amount: 24.67,
      date: new Date(2020, 9, 16),
    },
    {
      id: "e4",
      title: "Study Expenses",
      amount: 27.67,
      date: new Date(2021, 3, 28),
    },
  ];

  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
