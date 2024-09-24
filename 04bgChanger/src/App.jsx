import { useState } from "react";

function App() {
  const [color, setColor] = useState("orange");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-2 shadow-xl bg-white px-3 py-2 rounded-lg">
          <button
            className="outline-none px-4 rounded-sm text-xl text-white"
            style={{ background: "red" }}
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="outline-none px-4 rounded-sm text-xl text-white"
            style={{ background: "green" }}
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            className="outline-none px-4 rounded-sm text-xl text-white"
            style={{ background: "blue" }}
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            className="outline-none px-4 rounded-sm text-xl text-white"
            style={{ background: "orange" }}
            onClick={() => setColor("orange")}
          >
            orange
          </button>
          <button
            className="outline-none px-4 rounded-sm text-xl text-white"
            style={{ background: "cyan" }}
            onClick={() => setColor("cyan")}
          >
            cyan
          </button>
          <button
            className="outline-none px-4 rounded-sm text-xl text-white"
            style={{ background: "maroon" }}
            onClick={() => setColor("maroon")}
          >
            maroon
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
