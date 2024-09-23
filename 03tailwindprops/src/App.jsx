import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";

function App() {
  let user = {
    userName: "Chai aur code",
    age: 25,
  };

  return (
    <>
      <h1 className="bg-green-400 p-4 rounded-xl mb-4">Tailwind CSS</h1>
      <div className="display: flex gap-2">
        <Card username="Chai aur code" btnText="click me" />
        <Card username="Saif" btnText="click me" />
      </div>
    </>
  );
}

export default App;
