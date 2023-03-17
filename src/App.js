import Expenses from "./components/Expenses";
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

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
