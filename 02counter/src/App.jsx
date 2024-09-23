import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCouner] = useState(15);

  const addValue = () => {
    if (counter >= 20) return;
    setCouner(counter + 1);
  };

  const subtractValue = () => {
    if (counter <= 0) return;
    setCouner(counter - 1);
  };

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Couter value: {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <button onClick={subtractValue}>remove value {counter}</button>
      <p>pargraph: {counter}</p>

      <footer>Footer: {counter}</footer>
    </>
  );
}

export default App;
