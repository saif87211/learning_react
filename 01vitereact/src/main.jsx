import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return (
    <div>
      <h1>Custom App| Chai aur code</h1>
    </div>
  );
}
const anotherElement = (
  <a href="www.google.com" target="_blank">
    Visit Google
  </a>
);
const reactElement = React.createElement(
  "a",
  {
    href: "www.google.com",
    target: "_blank",
  },
  "Click Here for google",
);

createRoot(document.getElementById("root")).render(<App/>);
