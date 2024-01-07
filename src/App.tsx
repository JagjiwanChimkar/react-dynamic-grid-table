import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

function App() {
  return (
    <>
      <h1>React Dynamic Grid Table</h1>

      <Select options={options} />
    </>
  );
}

export default App;
