import List from "./components/Lists.jsx";

function App() {
  const aryFruit = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "strawberry", calories: 27 },
    { id: 3, name: "banana", calories: 93 },
    { id: 4, name: "orange", calories: 45 },
    { id: 5, name: "grape", calories: 62 },
  ];

  const aryVegetable = [
    { id: 1, name: "potato", calories: 110 },
    { id: 2, name: "celery", calories: 15 },
    { id: 3, name: "carrot", calories: 25 },
    { id: 4, name: "corn", calories: 63 },
    { id: 5, name: "broccoli", calories: 50 },
  ];

  return (
    <>
      <List items={aryFruit} category="Fruits" />
      <List items={aryVegetable} category="Vegetables" />
    </>
  );
}

export default App;
